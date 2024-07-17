'use client'
import { db } from '@/utlis/DB';
import { AIOutput } from '@/utlis/Schema';
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm';
import React from 'react'
import { TEMPLATE } from '../_components/Template';
import TemplateData from '@/app/(data)/TemplateData';
import Image from 'next/image';
import { CopyCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string,
}

const History = async () => {
    const user = await currentUser();

    {/*@ts-ignore*/ }
    const HistoryList: HISTORY[] = await db.select()
        .from(AIOutput)
        .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.id));

    const getTemplate = (slug: string): TEMPLATE | undefined => {
        const template = TemplateData.find((item) => item.slug === slug);
        return template;
    }
    return (
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">History</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI Response</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Length</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {HistoryList.map((item: HISTORY) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image 
                        src={getTemplate(item?.templateSlug)?.icon} 
                        alt={getTemplate(item.templateSlug)?.name}
                        width={40} 
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {getTemplate(item.templateSlug)?.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 line-clamp-2">{item.aiResponse}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item?.createdAt}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item?.aiResponse.length}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Button className='flex gap-2 items-center justify-center'
                  onClick={()=>navigator.clipboard.writeText(item?.aiResponse)}
                  >
                    <CopyCheck size={18} /> Copy
                  </Button>
                 
                </td>
              </tr>
            ))}
              </tbody>
        </table>
      </div>
    </div>
    )
}

export default History