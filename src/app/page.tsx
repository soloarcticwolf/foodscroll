import { LINK_HOME, LINK_SIGNUP } from '@/constant/link'
import { redirect } from 'next/navigation'

export function redirectToDestination() {
  const session = null

  if (!session) return redirect(LINK_SIGNUP)
  redirect(LINK_HOME)
}

const Page = () => {
  redirectToDestination()
  return null
}

export default Page
