const PATHS = {
  home: '/',
  api: '/api',
  login: '/login',
  logout: '/logout',
  application: {
    index: '/application',
    create: '/application/create',
    view: '/application',
    edit: '/application/edit/:id'
  }
} as const

export default PATHS
