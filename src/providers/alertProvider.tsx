import _ from 'lodash'
import React, { useCallback, useMemo, useState } from 'react'

import { DEFAULT_ALERT_MESSAGE } from '@/constants/alertsMessages'
import { AlertDataContext } from '@/contexts/alertContexts/alertDataContext'
import { AlertSetterContext } from '@/contexts/alertContexts/alertSetterContext'
import type { Alert, AlertAdding } from '@/types/alert'

interface Props {
  children: React.ReactNode
}

const AlertProvider: React.FC<Props> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([])

  const addAlert = useCallback(
    ({ message, type, durationSeconds }: AlertAdding) => {
      const alert: Alert = {
        id: Math.random() * 9999999,
        message,
        type,
        durationSeconds
      }
      _.defaultsDeep(alert, DEFAULT_ALERT_MESSAGE)
      setAlerts((prevAlerts) => [...prevAlerts, alert])
    },
    [setAlerts]
  )

  const removeAlert = useCallback(
    (id: number) => {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id))
    },
    [setAlerts]
  )

  const alertSetterValue = useMemo(
    () => ({ addAlert, removeAlert }),
    [setAlerts]
  )

  return (
    <AlertDataContext.Provider
      value={{
        alerts
      }}
    >
      <AlertSetterContext.Provider value={alertSetterValue}>
        {children}
      </AlertSetterContext.Provider>
    </AlertDataContext.Provider>
  )
}

export default AlertProvider
