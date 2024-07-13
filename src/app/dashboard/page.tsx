"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import Template from './_components/Template'

const page = () => {
  const [userSearch, setUserSearch] = useState<string>()
  return (
    <div>
      <SearchSection onSearch={(value:string)=>setUserSearch(value)}/>
      <Template userSearch={userSearch}/>
    </div>
  )
}

export default page