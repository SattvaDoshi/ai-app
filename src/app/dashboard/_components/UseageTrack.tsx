"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utlis/DB';
import { AIOutput } from '@/utlis/Schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect  } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsage';

const UseageTrack = () => {
    const {user}=useUser();
    const {TotalUsage, setTotalUsage} = useContext(TotalUsageContext)
    
    const getData=async()=>{
         {/*@ts-ignore*/} 
        const result:HISTORY[] = await db.select().from(AIOutput)
        .where(eq(AIOutput?.createdBy,user?.primaryEmailAddress?.emailAddress))
        getTotalusage(result)
    }
    useEffect(()=>{
        user&&getData()
    },[user])

    const getTotalusage=(result:HISTORY[])=>{
        let total:number = 0;
        result.forEach((ele:any)=>{
            total+=Number(ele.aiResponse?.length)
        })
        console.log(total);
        setTotalUsage(total) 
    }

  return (
    <div className='m-5'>
        <div className='bg-primary text-white rounded-lg p-3'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 w-full rounded-full mt-3 bg-blue-300'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width: `${(TotalUsage/10000)*100}%`
                }}
                ></div>
            </div>
            <h2 className='text-sm mt-2'>{TotalUsage}/10,000 credit used</h2>
        </div>
        <Button variant={'secondary'} className='my-3 w-full '>Upgrade</Button>
    </div>
  )
}

export default UseageTrack