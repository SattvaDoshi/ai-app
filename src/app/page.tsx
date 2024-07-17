import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Button><Link href={'/dashboard'}>Sattva</Link></Button>
    </div>
  )
}

export default page