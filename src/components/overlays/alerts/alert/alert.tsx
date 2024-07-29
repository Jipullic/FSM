import { useTimeoutFn } from '@reactuses/core'
import clsx from 'clsx'
import React, { useState } from 'react'

import CloseButton from '@/components/baseElements/buttons/closeButton'
import useSetterAlertContext from '@/hooks/useAlertContexts/useAlertSetterContext'
import type { Alert as AlertType } from '@/types/alert'
import { InfoSvg } from '@/utils/svgs'

import buttonStyles from './alert-button.module.sass'
import alertStyles from './alert.module.sass'

interface Props {
  alert: AlertType
}

const Alert: React.FC<Props> = ({ alert }) => {
  const { removeAlert } = useSetterAlertContext()
  const [isClosing, setIsClosing] = useState(false)

  const alertStyle = clsx(
    alertStyles.alert,
    isClosing ? 'animate-slide-out-up' : 'animate-slide-in-down',
    {
      [alertStyles.info]: alert.type === 'info',
      [alertStyles.success]: alert.type === 'success',
      [alertStyles.warning]: alert.type === 'warning',
      [alertStyles.error]: alert.type === 'error'
    }
  )

  const buttonStyle = clsx(buttonStyles['alert-button'], {
    [buttonStyles.info]: alert.type === 'info',
    [buttonStyles.success]: alert.type === 'success',
    [buttonStyles.warning]: alert.type === 'warning',
    [buttonStyles.error]: alert.type === 'error'
  })

  const onClickButton = () => {
    setIsClosing(true)
    setTimeout(() => {
      removeAlert(alert.id)
    }, 700)
  }

  useTimeoutFn(() => {
    onClickButton()
  }, alert.durationSeconds * 1000)

  return (
    <div className={alertStyle} role='alert'>
      <InfoSvg className='h-4 w-4'></InfoSvg>
      <div className={alertStyles.message}>{alert.message}</div>
      <CloseButton className={buttonStyle} onClick={onClickButton} />
    </div>
  )
}

export default Alert
