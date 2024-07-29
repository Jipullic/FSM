import { createContext } from 'react'

import type { AlertAdding } from '@/types/alert'

export interface AlertSetterContextType {
  addAlert: ({ message, type }: AlertAdding) => void
  removeAlert: (id: number) => void
}

export const AlertSetterContext = createContext<AlertSetterContextType>({
  addAlert: () => null,
  removeAlert: () => null
})
