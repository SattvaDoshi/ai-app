"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsage';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [TotalUsage, setTotalUsage] = useState<number>(0)

    return (
        <TotalUsageContext.Provider value={{TotalUsage,setTotalUsage}}>
        <div className='bg-slate-100 h-screen'>
            <div className='md:w-64 hidden md:block fixed md:border-r md:h-full'>
                <SideNav />
                
            </div>
            <div className='md:ml-64'>
            <Header/>
                {children}
            </div>
        </div>
        </TotalUsageContext.Provider>
    )
}

export default layout