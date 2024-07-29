import { createContext } from 'react'

import type { Modal } from '@/types/modal'

export interface ModalDataContextType {
  modals: Modal[]
}

export const ModalDataContext = createContext<ModalDataContextType>({
  modals: []
})
