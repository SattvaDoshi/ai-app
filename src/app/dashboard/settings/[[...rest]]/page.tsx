import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Settings = () => {
  return (
    <div className='flex relative justify-center items-center w-full h-screen'>
        <UserProfile/>
    </div>
  )
}

export default Settings