import { QueryClientProvider } from '@tanstack/react-query'
import type React from 'react'

import { queryClient } from '@/configs/queryClientConfig'

interface Props {
  children: React.ReactNode
}

const QueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
