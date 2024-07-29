import axios, { type CreateAxiosDefaults } from 'axios'

import PATHS from '@/constants/routesPaths'

const axiosConfig = {
  baseURL: PATHS.api,
  headers: {
    'Content-Type': 'application/json'
  }
} satisfies CreateAxiosDefaults

export const API = axios.create(axiosConfig)
