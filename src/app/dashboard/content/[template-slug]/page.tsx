"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import TemplateData from '@/app/(data)/TemplateData'
import { TEMPLATE } from '../../_components/Template'

interface PROPS{
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {

    const selectedTemplate:TEMPLATE|undefined=TemplateData?.find((item)=>item.slug==props.params['template-slug'])

    const generateAiContent=(formData:any)=>{

    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>generateAiContent(v)}/>
        <div className='col-span-2'>
        <OutputSection/>
        </div>
    </div>
  )
}

export default CreateNewContent