import { useQuery } from '@tanstack/react-query'

import { QUERIES_KEYS } from '@/constants/queries'
import { chartService } from '@/services/api/chart/chartService'
import type {
  FuelLimitAndConsumption,
  QueryFuelLimitAndConsumptionParams
} from '@/types/services/charts'
import { convertStringToDatesInObject } from '@/utils/date'

function useFuelLimitAndConsumption(
  params: QueryFuelLimitAndConsumptionParams
) {
  const { data, isLoading, isError } = useQuery<FuelLimitAndConsumption[]>({
    queryKey: [
      ...QUERIES_KEYS.fuelLimitAndConsumption,
      params?.startDatetime,
      params?.startDatetime
    ],
    queryFn: async () => {
      const response = await chartService.getFuelLimitAndConsumption(params)

      return convertStringToDatesInObject(response.data)
    }
  })

  return {
    fuelLimitAndConsumption: data,
    isLoading,
    isError
  }
}

export default useFuelLimitAndConsumption
