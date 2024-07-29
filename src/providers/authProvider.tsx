import { useState, type ReactNode } from 'react'

import { API } from '@/configs/axiosConfig'
import { AuthContext } from '@/contexts/authContext'
import { setAuthorizationHeader } from '@/services/api/auth'
import {
  setAccessToken,
  removeAccessToken
} from '@/services/localStorage/accessTokenLocalStorage'
import { type JwtPayload, Role } from '@/types/auth'
import { type User } from '@/types/auth'
import { jwtDecode } from '@/utils/jwtDecode'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({} as User)

  /**
   * Function to sign in the user with the provided access token.
   *
   * @param {string} accessToken - The access token to authenticate the user.
   * @return {boolean} Returns true if the user is successfully signed in, false otherwise.
   */
  const signIn = (accessToken: string): boolean => {
    const payload = jwtDecode<JwtPayload>(accessToken)
    if (!payload) return false

    setUser({
      username: payload.username,
      role: Role[payload.role],
      firstname: payload.firstname,
      lastname: payload.lastname,
      middlename: payload.middlename
    })

    setAccessToken(accessToken)
    setAuthorizationHeader(API, accessToken)

    return true
  }

  const signOut = () => {
    setUser({} as User)
    removeAccessToken()
    API.defaults.headers['Authorization'] = ''
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
