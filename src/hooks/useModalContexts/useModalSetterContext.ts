import { useContext } from 'react'

import {
  ModalSetterContext,
  type ModalSetterContextType
} from '@/contexts/modalContexts/modalSetterContext'

const useModalSetterContext = (): ModalSetterContextType => {
  return useContext(ModalSetterContext)
}

export default useModalSetterContext
