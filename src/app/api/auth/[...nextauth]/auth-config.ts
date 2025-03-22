import { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        console.log('***********credentials?.username', credentials?.username)
        const user = {
          id: '1asdfasdfasdfasdf',
          email: 'test1234',
          surname: 'somethign else',
          name: 'John Doe',
          username: 'test',
        }

        console.log('******************returnign from credentials provider')
        if (user) return user
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Use JWT for session management
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Use a strong secret
  },
  secret: process.env.NEXTAUTH_SECRET, // Required for JWT encryption
  pages: {
    signIn: '/auth', // Custom sign-in page
  },
  callbacks: {
    async jwt({ session, token, user }) {
      console.log('from jwt cb. session, token, user', session, token, user)
      token.user = user
      return token
    },
    async session({ session, token, user }) {
      console.log('from session cb. session, token, user', session, token, user)
      // @ts-expect-error Session type is defined, session unable to infer type
      session.user = token.user
      return session
    },
  },
}
