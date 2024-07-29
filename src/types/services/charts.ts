import type { QueryAdditionalParams } from './queryAdditionalParams'

export type QueryFuelEfficiencyParams = QueryAdditionalParams
export type QueryFuelLimitAndConsumptionParams = QueryAdditionalParams
export type QueryCostPerKmParams = QueryAdditionalParams

export interface FuelEfficiency {
  total: number
  greenZone: number
  yellowZone: number
  redZone: number
}

export interface CostPerKm {
  date: string
  cost: number
}

export interface FuelLimitAndConsumption {
  date: string
  fuelLimit: number
  fuelConsumption: number
}
