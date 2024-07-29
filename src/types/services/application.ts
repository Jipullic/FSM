export enum Status {
  notCompleted,
  completed
}

export interface Application {
  id: number
  startPoint: string
  endPoint: string
  startDate: Date
  endDate: Date
  fuelLimit: number
  fuelConsumption: number
  costPerKm: number
  createDate: Date
  status: Status
}
