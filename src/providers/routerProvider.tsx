import { RouterProvider as Router } from 'react-router-dom'

import router from '@/routes'

const RouterProvider = () => {
  return <Router router={router} />
}

export default RouterProvider
