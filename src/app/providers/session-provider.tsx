'use client'

import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
