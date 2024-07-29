import { useQuery } from '@tanstack/react-query'

import { QUERIES_KEYS } from '@/constants/queries'
import { chartService } from '@/services/api/chart/chartService'
import type {
  FuelEfficiency,
  QueryFuelEfficiencyParams
} from '@/types/services/charts'
import { convertStringToDatesInObject } from '@/utils/date'

const useFuelEfficiencyQuery = (params: QueryFuelEfficiencyParams) => {
  const { data, isLoading, isError } = useQuery<FuelEfficiency>({
    queryKey: [...QUERIES_KEYS.fuelEfficiency],
    queryFn: async () => {
      const response = await chartService.getFuelEfficiency(params)
      return convertStringToDatesInObject(response.data)
    }
  })

  return {
    fuels: data,
    isLoading,
    isError
  }
}

export default useFuelEfficiencyQuery
