import { useContext } from 'react'

import {
  AlertDataContext,
  type AlertDataContextType
} from '@/contexts/alertContexts/alertDataContext'

const useAlertDataContext = (): AlertDataContextType => {
  return useContext(AlertDataContext)
}

export default useAlertDataContext
