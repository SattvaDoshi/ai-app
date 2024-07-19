import React from 'react'
import { TEMPLATE } from './Template'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item:TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item?.slug}`} className="block h-full">
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 flex items-center justify-center h-16">
          <Image 
            src={item.icon} 
            alt={`${item.name} icon`} 
            width={50} 
            height={50}
            
          />
        </div>
        <h2 className="font-semibold text-lg mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
          {item.name}
        </h2>
        <p className="text-gray-600 text-sm flex-grow overflow-hidden line-clamp-3">
          {item.desc}
        </p>
        <div className="mt-4 flex items-center text-primary font-medium">
          <span>Learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default TemplateCard