import { createContext } from 'react'

import type { Alert } from '@/types/alert'

export interface AlertDataContextType {
  alerts: Alert[]
}

export const AlertDataContext = createContext<AlertDataContextType>({
  alerts: []
})
