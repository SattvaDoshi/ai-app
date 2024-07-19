"use client"
import React, { useEffect, useState } from 'react'
import TemplateData from '@/app/(data)/TemplateData'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    catagory:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    lable:string,
    field:string,
    name:string,
    required?:boolean
}

const Template = ({userSearch}:any) => {
    const [templateList, setTemplateList] = useState(TemplateData)

    useEffect(() => {
     if(userSearch){
        const filterData = templateList.filter((item)=>(
            item.name.toLowerCase().includes(userSearch.toLowerCase()) || item.catagory.toLowerCase().includes(userSearch)
        ))
        setTemplateList(filterData)
     }
     else{
        setTemplateList(TemplateData)
     }
    }, [userSearch])
    
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'>
        {templateList.map((item:TEMPLATE,idx:number)=>(
           <TemplateCard key={idx} {...item} />
        ))}
    </div>
  )
}

export default Template