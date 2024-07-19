"use client"
import { File, Home, Settings, Wallet, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useState } from 'react'
import UseageTrack from './UseageTrack'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscrption'

const SideNav = () => {
    const path = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { UserSubscription } = useContext(UserSubscriptionContext)

    const menulist = [
        {
            name: "Home",
            icons: Home,
            path: '/dashboard'
        },
        {
            name: "History",
            icons: File,
            path: '/dashboard/history',
            requiresSubscription: true
        },
        {
            name: "Billing",
            icons: Wallet,
            path: '/dashboard/billing'
        },
        {
            name: "Settings",
            icons: Settings,
            path: '/dashboard/settings'
        },
    ]

    return (
        <div className='bg-white'>
            <button
                className="lg:hidden fixed top-3 left-4 z-50 p-2 bg-white rounded-md shadow-md"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {!isMobileMenuOpen && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform
             duration-300 ease-in-out lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    <div className="md:p-5 border-b-2 md:mx-3 py-5 px-2 flex justify-between items-center gap-4">
                        <Link href="/dashboard" className="flex gap-2 items-center">
                            <Image src="/logo.svg" height={35} width={36} alt="img" />
                            <span className="text-primary font-extrabold md:text-xl text-lg">AutoContent</span>
                        </Link>
                        {isMobileMenuOpen && (
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <X />
                            </button>
                        )}
                    </div>
                    <div className="flex-grow overflow-y-auto">
                        <div className="flex flex-col w-full">
                            {menulist.map((item, idx) => (
                                (!item.requiresSubscription || UserSubscription) && (
                                    <Link href={item.path} key={idx}>
                                        <button
                                            className={`flex gap-2 p-4 px-6 w-full items-center 
                                            ${path === item.path ? 'text-primary bg-blue-100' : 'hover:bg-gray-100'}
                                            ${item.requiresSubscription && !UserSubscription ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            disabled={item.requiresSubscription && !UserSubscription}
                                        >
                                            <item.icons />
                                            <h2>{item.name}</h2>
                                        </button>
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                    <div>
                        <UseageTrack />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav