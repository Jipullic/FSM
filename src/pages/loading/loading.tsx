import React from 'react'

import Loading from '@/components/elements/loading/loading'

import styles from './loading.module.sass'

const LoadingPage: React.FC = () => {
  return (
    <div className={styles.main}>
      <Loading />
    </div>
  )
}

export default LoadingPage
