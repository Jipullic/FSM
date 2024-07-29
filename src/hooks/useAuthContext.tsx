import { useContext } from 'react'

import { AuthContext, type AuthContextType } from '@/contexts/authContext'

const useAuthContext = (): AuthContextType => {
  return useContext(AuthContext)
}

export default useAuthContext
