"use client"
import { File, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import UseageTrack from './UseageTrack'

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
        <div className='relative shadow-sm border-r h-full bg-white'>
            <div className='p-5 border-b-2 mx-3'>
                <a
                    href="/"
                    className="flex gap-2 items-center ">
                    <Image src='/logo.svg' height={35} width={36} alt='img' />
                    <span className='text-primary font-extrabold md:text-xl text-lg'>Ease Share</span>
                </a>
            </div>
            <div className='flex flex-col float-left w-full'>
            {menulist.map((item,idx)=>(
                 <Link href={item.path}>
            <button className={`flex gap-2 p-4 px-6 w-full
                    ${path==item.path ?'text-primary bg-blue-100':null} `}

            >
              
               <item.icons/>
               <h2>{item.name}</h2>
               
            </button>
            </Link>
            ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UseageTrack/>
            </div>
        </div>
    )
}

export default SideNav

