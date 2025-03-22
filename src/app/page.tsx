import { LINK_AUTH, LINK_HOME } from '@/constant/link'
import { NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Page: NextPage = async () => {
  const session = await getSession()
  if (!session) return redirect(LINK_AUTH)
  redirect(LINK_HOME)
}

export default Page
