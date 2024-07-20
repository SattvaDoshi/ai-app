"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utlis/DB';
import { AIOutput,userSubscriptionSchema } from '@/utlis/Schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState  } from 'react'
import { TotalUsageContext } from '@/app/(context)/TotalUsage';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscrption';
import { CreditUsageContext } from '@/app/(context)/CreditUsage';
import Link from 'next/link';

export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string,
}

const UseageTrack = () => {
    const {user}=useUser();
    const {TotalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const { setUserSubscription} = useContext(UserSubscriptionContext)
    const { CreditUsage } = useContext(CreditUsageContext)
    const [maxWord, setMaxWord] = useState(10000)

    const isUserWithEmail = (user: any): user is { primaryEmailAddress: { emailAddress: string } } => {
      return user && user.primaryEmailAddress && typeof user.primaryEmailAddress.emailAddress === 'string';
  }

    useEffect(() => {
      if (isUserWithEmail(user)) {
          getData();
          isUserSubscribe();
      }
  }, [user, CreditUsage]);

    const getData = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) {
          console.log("User email is not available");
          return;
      }
      {/*@ts-ignore*/}
      const result: HISTORY[] = await db.select().from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
      getTotalusage(result);
  }

  const isUserSubscribe = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
        console.log("User email is not available");
        setUserSubscription(false);
        setMaxWord(10000);
        return;
    }

    try {
        const result = await db
            .select()
            .from(userSubscriptionSchema)
            .where(eq(userSubscriptionSchema.email, user.primaryEmailAddress.emailAddress));

        if (result.length > 0) {
            setUserSubscription(true);
            setMaxWord(100000);
        } else {
            setUserSubscription(false);
            setMaxWord(10000);
        }

        console.log(result);
    } catch (error) {
        console.error('Error checking user subscription:', error);
        setUserSubscription(false);
        setMaxWord(10000);
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
        <Button variant={'secondary'} className='my-3 w-full '>
            <Link href={'/dashboard/billing'}>Upgrade</Link>
        </Button>
    </div>
  )
}

export default UseageTrack