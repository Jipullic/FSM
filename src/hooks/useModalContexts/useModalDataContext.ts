import { useContext } from 'react'

import {
  ModalDataContext,
  type ModalDataContextType
} from '@/contexts/modalContexts/modalDataContext'

const useModalDataContext = (): ModalDataContextType => {
  return useContext(ModalDataContext)
}

export default useModalDataContext
