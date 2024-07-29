import { createContext } from 'react'

import type { ModalNames } from '@/constants/modals'
import type { ModalCreating } from '@/types/modal'

export interface ModalSetterContextType {
  createModal: (data: ModalCreating) => void
  toggleModal: (name: ModalNames) => void
  clearModals: () => void
}

export const ModalSetterContext = createContext<ModalSetterContextType>({
  createModal: () => null,
  toggleModal: () => null,
  clearModals: () => null
})
