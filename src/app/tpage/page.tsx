import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

const Page = async () => {
  const session = await getSession()
  const serverSession = await getServerSession()

  console.log('from tpage, session', session)
  console.log('from tpage, server session', serverSession)
  return <div>Page</div>
}

export default Page
