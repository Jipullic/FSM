import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import SuspenseContainer from '@/components/containers/suspenseContainer/suspenseContainer'
import PATHS from '@/constants/routesPaths'
import NotFound from '@/pages/errors/notFound/notFound'

const Login = lazy(() => import('@/pages/auth/login/login'))
const Logout = lazy(() => import('@/pages/auth/logout/logout'))

const commonRoutes: RouteObject[] = [
  {
    path: PATHS.login,
    element: (
      <SuspenseContainer>
        <Login />
      </SuspenseContainer>
    )
  },
  {
    element: (
      <SuspenseContainer>
        <Logout />
      </SuspenseContainer>
    ),
    path: PATHS.logout
  },
  { path: '*', element: <NotFound /> }
]

export default commonRoutes
