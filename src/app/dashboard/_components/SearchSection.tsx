import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearch}:any) => {

  return (
    <div className='p-10 bg-gradient-to-br from-primary via-blue-500 to-blue-400 
     shadow-lg flex flex-col items-center justify-center '>
        <h2 className='md:text-4xl text-2xl font-bold flex justify-center items-center text-white'>Browse All Templates</h2>
        <p className='text-white'>What would you like to create Today ??</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 mt-5 mb-2 p-2 items-center border rounded-lg bg-white md:w-[45%] w-[90%]'>
                <Search className='text-primary'/>
                <input type="text" placeholder='Search' className='bg-transparent w-full outline-none text-black' 
                onChange={(event)=>onSearch(event.target.value)}
                />
            </div>
        </div>
    </div>
  )
}

export default SearchSection