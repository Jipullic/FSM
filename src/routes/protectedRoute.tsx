import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import PATHS from '@/constants/routesPaths'
import useAuthContext from '@/hooks/useAuthContext'
import Forbidden from '@/pages/errors/forbidden/forbidden'
import Loading from '@/pages/loading/loading'
import { logout, refresh } from '@/services/api/auth'
import { getAccessToken } from '@/services/localStorage/accessTokenLocalStorage'
import { Role } from '@/types/auth'

interface ProtectedRouteProps {
  roles: Role[]
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
  const { user, signIn, signOut } = useAuthContext()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  const attemptLogin = async () => {
    const storedAccessToken = getAccessToken()

    if (storedAccessToken) {
      const isValidAccessToken = signIn(storedAccessToken)
      if (!isValidAccessToken) {
        try {
          const refreshedAccessToken = await refresh()
          signIn(refreshedAccessToken)
        } catch (axiosError) {
          signOut()
          logout()
        }
      }
    } else {
      signOut()
      logout()
    }

    setIsLoading(false)
  }

  useEffect(() => {
    attemptLogin()
  }, [])

  if (isLoading) return <Loading />

  if (Object.keys(user).length === 0) {
    return <Navigate to={PATHS.login} state={{ from: location }} replace />
  }

  if (!roles.includes(user.role)) {
    return <Forbidden />
  }

  return <Outlet />
}

export default ProtectedRoute
