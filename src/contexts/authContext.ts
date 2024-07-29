import { createContext } from 'react'

import type { User } from '@/types/auth'

export interface AuthContextType {
  user: User
  signIn: (accessToken: string) => boolean
  signOut: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  signIn: () => false,
  signOut: () => null
})
