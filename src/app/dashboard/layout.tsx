"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsage';
import { UserSubscriptionContext } from '../(context)/UserSubscrption';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [TotalUsage, setTotalUsage] = useState<number>(0)
    const [userSubscription, setUserSubscription] = useState<boolean>(false)

    return (
        <TotalUsageContext.Provider value={{TotalUsage,setTotalUsage}}>
            <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
        <div className='bg-slate-100 h-screen'>
            <div className='md:w-64 hidden md:block fixed md:border-r md:h-full'>
                <SideNav />
                
            </div>
            <div className='md:ml-64'>
            <Header/>
                {children}
            </div>
        </div>
        </UserSubscriptionContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default layout