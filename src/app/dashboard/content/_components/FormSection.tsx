"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/Template'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PROPS {
    selectedTemplate?: TEMPLATE,
    userFormInput: any
}

const FormSection = ({ selectedTemplate, userFormInput }: PROPS) => {

    const [formData, setFormData] = useState<any>();

    const onChangeInput = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData)
    }

    return (
        <div>
            <Link href={'/dashboard'} className='mb-4'>
                <Button className='mb-4'> <ArrowLeft />Back</Button>
            </Link>
            <div className='p-5 shadow-md border rounded-lg bg-white'>
                {/* @ts-ignore */}
                <Image src={selectedTemplate?.icon}
                    alt='img' width={70} height={70} />
                <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
                <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
                <form onSubmit={onSubmit} className='mt-8'>
                    {selectedTemplate?.form?.map((item) => (
                        <div className='my-2 flex flex-col gap-2 mb-2'>
                            <label htmlFor="" className='font-semibold'>{item.lable}</label>
                            {item?.field == "input" ?
                                <Input name={item.name} required={item?.required}
                                    onChange={onChangeInput}
                                /> :
                                item?.field == 'textarea' ?
                                    <Textarea name={item.name} required={item?.required}
                                        onChange={onChangeInput}
                                    /> : null
                            }
                        </div>
                    ))}
                    <Button type='submit' className='w-full p-2 mt-8'>Generate Content</Button>
                </form>
            </div>
        </div>
    )
}

export default FormSection