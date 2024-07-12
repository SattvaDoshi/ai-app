import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-4 shadow-sm border-b flex justify-between items-center'>
        <div className='flex gap-2 items-center p-2 border rounded max-w-lg'>
            <Search/>
            <input type="text" placeholder='Search...' className='outline-none'/>
        </div>
        <div className='bg-primary p-2 cursor-pointer rounded-full text-xs text-white'>
            <h2>🔥Join Membership just for ₹199/Month</h2>
        </div>
    </div>
  )
}

export default Header