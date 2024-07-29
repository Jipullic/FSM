import { useQuery } from '@tanstack/react-query'

import { QUERIES_KEYS } from '@/constants/queries'
import { chartService } from '@/services/api/chart/chartService'
import type { CostPerKm, QueryCostPerKmParams } from '@/types/services/charts'
import { convertStringToDatesInObject } from '@/utils/date'

function useCostPerKmQuery(params: QueryCostPerKmParams) {
  const { data, isLoading, isError } = useQuery<CostPerKm[]>({
    queryKey: [
      ...QUERIES_KEYS.costPerKm,
      params?.startDatetime,
      params?.startDatetime
    ],
    queryFn: async () => {
      const response = await chartService.getCostPerKm(params)

      return convertStringToDatesInObject(response.data)
    }
  })

  return {
    costsPerKm: data,
    isLoading,
    isError
  }
}

export default useCostPerKmQuery
