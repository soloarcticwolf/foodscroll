import { LINK_AUTH } from '@/constant/link'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession()

  console.log('from layout', session)
  if (!session) return redirect(LINK_AUTH)
  return <div>{children}</div>
}

export default layout
