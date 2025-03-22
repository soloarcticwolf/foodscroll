import { signIn, signOut } from 'next-auth/react'

export function appCredentialSignin(redirectURL: string) {
  return signIn('credentials', { callbackUrl: redirectURL })
}

export function appSignout(redirectURL: string = '') {
  return redirectURL ? signOut({ callbackUrl: redirectURL }) : signOut()
}
