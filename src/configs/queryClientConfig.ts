import { QueryClient, type DefaultOptions } from '@tanstack/react-query'

const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000
  }
} satisfies DefaultOptions

export const queryClient = new QueryClient({
  defaultOptions: queryConfig
})
