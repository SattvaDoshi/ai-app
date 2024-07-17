"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import TemplateData from '@/app/(data)/TemplateData'
import { TEMPLATE } from '../../_components/Template'
import { chatSession } from '@/utlis/AImodel'
import { db } from '@/utlis/DB'
import { AIOutput } from '@/utlis/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsage'

interface PROPS{
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {

  const selectedTemplate:TEMPLATE|undefined=TemplateData?.find((item)=>item.slug==props.params['template-slug'])
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>("")
  const {user} = useUser()
  const {TotalUsage} = useContext(TotalUsageContext)

    const generateAiContent=async(formData:any)=>{
      if(TotalUsage>=10000){
        return;
      }
      setLoading(true)
      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAiPrompt=JSON.stringify(formData)+" ,"+selectedPrompt;
      const result = await chatSession.sendMessage(finalAiPrompt);
      setAiOutput(result?.response.text());
      setLoading(false)
      await SaveInfoDB(formData,selectedTemplate?.slug,result?.response.text())
    }

    const SaveInfoDB=async(formData:any,slug:any,aiOutput:string)=>{
      const result = await db.insert(AIOutput).values({
        formData:formData,
        templateSlug:slug,
        aiResponse:aiOutput,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD/MM/yyyy')
      })
      console.log(result);
      
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        <FormSection 
        selectedTemplate={selectedTemplate} 
        userFormInput={(v:any)=>generateAiContent(v)}
        loading={loading}
        />
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>
        </div>
    </div>
  )
}

export default CreateNewContent