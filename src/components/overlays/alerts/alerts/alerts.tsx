import React from 'react'

import useDataAlertContext from '@/hooks/useAlertContexts/useAlertDataContext'

import styles from './alerts.module.sass'
import Alert from '../alert/alert'

const Alerts: React.FC = () => {
  const { alerts } = useDataAlertContext()

  return (
    <div className={styles['alerts-container']}>
      {alerts.map((alert) => {
        return <Alert key={'alert-' + alert.id} alert={alert}></Alert>
      })}
    </div>
  )
}

export default Alerts
