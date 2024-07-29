export const APPLICATION_PAGE_SIZE = 20

export const QUERIES_KEYS = {
  application: {
    all: ['application', 'all'],
    total: ['application', 'total']
  },

  fuelEfficiency: ['fuelEfficiency'],
  costPerKm: ['costPerKm'],
  fuelLimitAndConsumption: ['fuelLimitAndConsumption']
} as const

export const MUTATIONS_KEYS = {
  application: {
    post: ['application', 'post'],
    patch: ['application', 'patch'],
    delete: ['application', 'delete']
  }
} as const
