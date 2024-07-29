import { Outlet, type RouteObject } from 'react-router-dom'

import { API } from '@/configs/axiosConfig'
import AxiosInterceptorSetup from '@/middlewares/axiosInterceptors'
import ModalsCleanup from '@/middlewares/modalsCleanup'

const Middlewares: React.FC = () => {
  return (
    <>
      <AxiosInterceptorSetup axiosInstance={API} />
      <ModalsCleanup />
      <Outlet />
    </>
  )
}

const RouteMiddlewares = (routes: RouteObject[]): RouteObject[] => {
  return [
    {
      path: '/',
      element: <Middlewares />,
      children: routes
    }
  ]
}

export default RouteMiddlewares
