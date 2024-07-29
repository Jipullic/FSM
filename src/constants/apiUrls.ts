const URLS = {
  auth: {
    login: 'User/login',
    refresh: 'User/refresh',
    logout: 'User/logout'
  },
  application: {
    get: 'ApplicationToDispatcher/${id}',
    getAll: 'ApplicationToDispatcher',
    getTotal: 'ApplicationToDispatcher/total',
    post: 'ApplicationToDispatcher',
    patch: 'ApplicationToDispatcher'
  },
  chart: {
    getFuel: 'ApplicationToDispatcher/fuel-efficiency',
    getCostPerKm: 'ApplicationToDispatcher/cost-per-km',
    getFuelLimitAndConsumption: 'ApplicationToDispatcher/fuel-limit-consumption'
  }
} as const

export default URLS
