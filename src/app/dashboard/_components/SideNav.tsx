"use client"
import { File, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {

    const path = usePathname();
    

    const menulist =[
        {
            name: "Home",
            icons: Home,
            path: '/dashboard'
        },
        {
            name: "History",
            icons: File,
            path: '/dashboard/history'
        },
        {
            name: "Billing",
            icons: Wallet,
            path: '/dashboard/billing'
        },
        {
            name: "Setting",
            icons: Settings,
            path: '/dashboard/setting'
        },
    ]

   
    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5'>
                <a
                    href="/"
                    className="flex gap-2 items-center ">
                    <Image src='/logo.svg' height={35} width={36} alt='img' />
                    <span className='text-primary font-extrabold md:text-xl text-lg'>Ease Share</span>
                </a>
            </div>
            <div className='flex flex-col float-left w-full'>
            {menulist.map((item,idx)=>(
                <button className={`flex gap-2 p-4 px-6 w-full
                    ${path==item.path ?'text-primary bg-blue-100':null} `}
                
                >
                <item.icons/>
                <h2>{item.name}</h2>
            </button>
            ))}
            </div>
        </div>
    )
}

export default SideNav

