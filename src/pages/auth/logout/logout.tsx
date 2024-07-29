import type React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import PATHS from '@/constants/routesPaths'
import useAuthContext from '@/hooks/useAuthContext'
import { logout } from '@/services/api/auth'

const Logout: React.FC = () => {
  const { signOut } = useAuthContext()

  useEffect(() => {
    signOut()
    logout()
  }, [signOut])

  return <Navigate to={PATHS.login} replace></Navigate>
}

export default Logout
