import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

import Alerts from '@/components/overlays/alerts/alerts/alerts'
import AlertProvider from '@/providers/alertProvider'
import AuthProvider from '@/providers/authProvider'
import ModalProvider from '@/providers/modalProvider'
import QueryProvider from '@/providers/queryProvider'
import RouterProvider from '@/providers/routerProvider'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <QueryProvider>
        <AlertProvider>
          <ModalProvider>
            <Alerts />
            <RouterProvider />
          </ModalProvider>
        </AlertProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryProvider>
    </AuthProvider>
  )
}

export default App
