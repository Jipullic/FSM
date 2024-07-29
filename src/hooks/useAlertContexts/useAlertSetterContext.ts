import { useContext } from 'react'

import {
  AlertSetterContext,
  type AlertSetterContextType
} from '@/contexts/alertContexts/alertSetterContext'

const useAlertSetterContext = (): AlertSetterContextType => {
  return useContext(AlertSetterContext)
}

export default useAlertSetterContext
