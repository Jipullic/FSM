import type { AxiosResponse } from 'axios'

import { API } from '@/configs/axiosConfig'
import URLS from '@/constants/apiUrls'
import type {
  CostPerKm,
  FuelEfficiency,
  FuelLimitAndConsumption,
  QueryCostPerKmParams,
  QueryFuelEfficiencyParams,
  QueryFuelLimitAndConsumptionParams
} from '@/types/services/charts'

export class ChartService {
  async getFuelEfficiency(
    params: QueryFuelEfficiencyParams
  ): Promise<AxiosResponse<FuelEfficiency>> {
    return await API.get<FuelEfficiency>(URLS.chart.getFuel, {
      params
    })
  }

  async getCostPerKm(
    params: QueryCostPerKmParams
  ): Promise<AxiosResponse<CostPerKm[]>> {
    return await API.get<CostPerKm[]>(URLS.chart.getCostPerKm, {
      params
    })
  }

  async getFuelLimitAndConsumption(
    params: QueryFuelLimitAndConsumptionParams
  ): Promise<AxiosResponse<FuelLimitAndConsumption[]>> {
    return await API.get<FuelLimitAndConsumption[]>(
      URLS.chart.getFuelLimitAndConsumption,
      {
        params: params
      }
    )
  }
}

export const chartService = new ChartService()
