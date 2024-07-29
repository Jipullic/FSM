import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/elements/button/button'
import PATHS from '@/constants/routesPaths'

import styles from './baseErrorPage.module.sass'

interface Props {
  statusCode: number
  text: string
}

const BaseErrorPage: React.FC<Props> = ({ statusCode, text }) => {
  const navigate = useNavigate()

  return (
    <div className={styles['outer-container']}>
      <div className={styles['inner-container']}>
        <h1 className={styles['error-code']}>{statusCode}</h1>
        <h2 className={styles['error-text']}>{text}</h2>
        <a onClick={() => navigate(PATHS.home)}>
          <Button buttonStyle='primary'>На Главную</Button>
        </a>
      </div>
    </div>
  )
}

export default BaseErrorPage
