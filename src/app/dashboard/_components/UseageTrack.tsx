"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utlis/DB';
import { AIOutput,userSubscriptionSchema } from '@/utlis/Schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState  } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsage';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscrption';
import { CreditUsageContext } from '@/app/(context)/CreditUsage';

const UseageTrack = () => {
    const {user}=useUser();
    const {TotalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const { setUserSubscription} = useContext(UserSubscriptionContext)
    const { CreditUsage } = useContext(CreditUsageContext)
    const [maxWord, setMaxWord] = useState(10000)

    useEffect(()=>{
        user&&getData();
        user&&isUserSubscribe();
    },[user,CreditUsage])

    
    const getData=async()=>{
         {/*@ts-ignore*/} 
        const result:HISTORY[] = await db.select().from(AIOutput)
        .where(eq(AIOutput?.createdBy,user?.primaryEmailAddress?.emailAddress))
        getTotalusage(result)
    }

    const isUserSubscribe = async () => {
        try {
          const result = await db
            .select()
            .from(userSubscriptionSchema)
            .where(eq(userSubscriptionSchema?.email,user?.primaryEmailAddress?.emailAddress));
      
          if (result.length > 0) { // Assuming result is an array and checking if it's not empty
            setUserSubscription(true);
            setMaxWord(100000);
          } else {
            setUserSubscription(false); // Resetting the subscription status if the user is not found
            setMaxWord(10000); // Optionally reset max words or set to a default value for unsubscribed users
          }
      
          console.log(result);
        } catch (error) {
          console.error('Error checking user subscription:', error);
          // Optionally handle the error by setting default state or showing a message to the user
        }
      };
      

    
    const getTotalusage=(result:HISTORY[])=>{
        let total:number = 0;
        result.forEach((ele:any)=>{
            total+=Number(ele.aiResponse?.length)
        })
        setTotalUsage(total) 
    }

  return (
    <div className='m-5'>
        <div className='bg-primary text-white rounded-lg p-3'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 w-full rounded-full mt-3 bg-blue-300'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width: `${(TotalUsage/maxWord)*100}%`
                }}
                ></div>
            </div>
            <h2 className='text-sm mt-2'>{TotalUsage}/{maxWord} credits used</h2>
        </div>
        <Button variant={'secondary'} className='my-3 w-full '>Upgrade</Button>
    </div>
  )
}

export default UseageTrack