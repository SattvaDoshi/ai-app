import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = () => {
  const editRef:any=useRef()
  return (
    <div className='bg-white shadow-lg border rounded'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-semibold text-lg'>Your Result</h2>
        <Button className='flex justify-center items-center gap-2'>
          <Copy className='w-4 h-4'/>Copy
        </Button>
      </div>
      <Editor
        ref={editRef}
        initialValue="Your Result will appear here"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  )
}

export default OutputSection