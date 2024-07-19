import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Billing = () => {
    return (
        <div>
            <div className="pt-5 bg-slate-100" id="pricing">
                <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
                    <p className="text-4xl font-bold text-center mb-16 text-primary">
                        Choose the product that works best
                    </p>
                    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div className="bg-white rounded-3xl p-8 xl:p-10 shadow-lg">
                            <div className="flex items-center justify-between gap-x-4">
                                <h2 id="product1" className="text-2xl font-bold text-primary">
                                    Free Plan
                                </h2>

                            </div>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-5xl font-extrabold tracking-tight">₹ 0</span>
                                <span className="text-xl font-medium ">/month</span>
                            </p>
                            <Button

                                aria-describedby="product1" className="mt-8 block w-full text-center text-sm font-semibold">
                                <Link href={'/sign-up'}>Sign Up</Link>
                            </Button>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-blue-200">
                                <li className="flex gap-x-3 items-center">
                                    <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-primary">All AI Tools</span>
                                </li>
                                <li className="flex gap-x-3 items-center">
                                    <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-primary">10,000 free Credits</span>
                                </li>

                            </ul>
                        </div>
                        <div className="bg-white rounded-3xl p-8 xl:p-10 shadow-lg">
                            <div className="flex items-center justify-between gap-x-4">
                                <h2 id="product1" className="text-2xl font-bold text-primary">
                                    Gold Plan
                                </h2>
                                <span className="inline-flex items-center rounded-full bg-blue-400 px-3 py-0.5 text-sm font-medium text-blue-900">
                                    Most Popular
                                </span>
                            </div>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-5xl font-extrabold tracking-tight">₹ 99</span>
                                <span className="text-xl font-medium ">/month</span>
                            </p>
                            <Button
                                aria-describedby="product1" className="mt-8 w-full text-center text-sm font-semibold">
                                <Link href={'/sign-up'}>
                                    Buy now
                                </Link>
                            </Button>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-blue-200">
                                <li className="flex gap-x-3 items-center">
                                    <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-primary">All AI Tools</span>
                                </li>
                                <li className="flex gap-x-3 items-center">
                                    <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-primary">100,000 free Credits</span>
                                </li>
                                <li className="flex gap-x-3 items-center">
                                    <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-primary">Access to Hitory</span>
                                </li>

                            </ul>
                        </div>
                        <div className="bg-white rounded-3xl p-8 xl:p-10 shadow-lg">
                            <div className="flex items-center justify-between gap-x-4">
                                <h2 id="product1" className="text-2xl font-bold text-primary">
                                    Platinum Plan
                                </h2>

                            </div>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-5xl font-extrabold tracking-tight">₹ 149</span>
                                <span className="text-xl font-medium ">/month</span>
                            </p>
                            <Button
                                aria-describedby="product1" className="mt-8 block w-full text-center text-sm font-semibold">
                                <Link href={'/sign-up'}>
                                    Buy now
                                </Link>
                            </Button>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-blue-200">
                                <li className="flex gap-x-3 items-center">
                                    <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-primary">All AI Tools</span>
                                </li>
                                <li className="flex gap-x-3 items-center">
                                    <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-primary">Unlimited Credits</span>
                                </li>
                                <li className="flex gap-x-3 items-center">
                                    <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-primary">Access to History</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing