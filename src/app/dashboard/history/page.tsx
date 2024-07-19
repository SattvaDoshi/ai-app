import { getHistoryData, HISTORY } from './_components/GetHistory';
import TemplateData from '@/app/(data)/TemplateData';
import { TEMPLATE } from '../_components/Template';
import Image from 'next/image';
import { CopyCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function History() {
    const historyList = await getHistoryData();

    const getTemplate = (slug: string): TEMPLATE | undefined => {
        return TemplateData.find((item) => item.slug === slug);
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
                        {historyList.map((item: HISTORY) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <Image 
                                                src={getTemplate(item?.templateSlug)?.icon || ''} 
                                                alt={getTemplate(item.templateSlug)?.name || ''}
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
                                    onClick={() => navigator.clipboard.writeText(item?.aiResponse)}
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