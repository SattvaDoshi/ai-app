"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import TemplateData from '@/app/(data)/TemplateData'
import { TEMPLATE } from '../../_components/Template'
import { chatSession } from '@/utlis/AImodel'

interface PROPS{
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {

    const selectedTemplate:TEMPLATE|undefined=TemplateData?.find((item)=>item.slug==props.params['template-slug'])
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>("")

    const generateAiContent=async(formData:any)=>{
      setLoading(true)
      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAiPrompt=JSON.stringify(formData)+" ,"+selectedPrompt;
      const result = await chatSession.sendMessage(finalAiPrompt);
      setAiOutput(result?.response.text());
      setLoading(false)
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