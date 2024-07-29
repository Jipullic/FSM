import { createBrowserRouter } from 'react-router-dom'

import RouteMiddlewares from '@/middlewares'
import commonRoutes from '@/routes/common'
import privateRoutes from '@/routes/private'

const routes = [...privateRoutes, ...commonRoutes]
const router = createBrowserRouter([...RouteMiddlewares(routes)])

export default router
