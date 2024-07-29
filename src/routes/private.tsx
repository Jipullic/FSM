import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import PATHS from '@/constants/routesPaths'
import Application from '@/pages/crud/application/application'
import Dashboard from '@/pages/dashboard/dashboard/dashboard'
import { Role } from '@/types/auth'

import ProtectedRoute from './protectedRoute'

// const Dashboard = lazy(() => import('@/pages/dashboard/dashboard'))
// const Application = lazy(() => import('@/pages/crud/application/application'))

const privateRoutes: RouteObject[] = [
  {
    path: PATHS.home,
    element: <ProtectedRoute roles={[Role.Director, Role.Manager]} />,
    children: [
      {
        path: PATHS.home,
        element: <Dashboard />
      },
      {
        path: PATHS.application.view,
        element: <Application />
      }
    ]
  }
]

export default privateRoutes
