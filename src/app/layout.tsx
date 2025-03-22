import type { Metadata } from 'next'

import './globals.css'
import AuthProvider from './providers/session-provider'

export const metadata: Metadata = {
  title: 'Foodscroll',
  description: 'Find street foods with scroll',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
