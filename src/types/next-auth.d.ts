import 'next-auth'
import { TypeAuthUser } from '../app/api/auth/[...nextauth]/auth.type'

declare module 'next-auth' {
  interface User extends TypeAuthUser {
    // :: Using our custom User type to inform next about the properties of the user.
    // :: Empty interface causes error, that'swhy Id. Id already exist in TypeAuthUser
    id: string
  }

  interface DefaultSession {
    // :: Using our custom Session type to inform next about the properties of the session.
    user?: User
    expires: ISODateString
  }
}
