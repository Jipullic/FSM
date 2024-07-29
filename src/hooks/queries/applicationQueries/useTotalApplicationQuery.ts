import { useQuery } from '@tanstack/react-query'

import { QUERIES_KEYS } from '@/constants/queries'
import { applicationService } from '@/services/api/application/applicationService'
import type { Total } from '@/types/services/pagination'

const useTotalApplicationQuery = () => {
  const { data, isLoading, isError } = useQuery<Total>({
    queryKey: QUERIES_KEYS.application.total,
    queryFn: async () => {
      const response = await applicationService.getTotalApplication()
      return response.data
    }
  })

  return {
    total: data,
    isLoading,
    isError
  }
}
export default useTotalApplicationQuery
