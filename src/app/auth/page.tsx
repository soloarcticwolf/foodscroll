'use client'
import { Button } from '@/components/ui/button'
import { NextPage } from 'next'

const Page: NextPage = () => {
  function handleButton() {
    console.log('clicked onme')
  }
  return (
    <div>
      <Button onClick={handleButton}>Click me</Button>
    </div>
  )
}

export default Page
