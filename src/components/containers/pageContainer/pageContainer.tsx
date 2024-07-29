import clsx from 'clsx'
import type React from 'react'

import ErrorBoundary from '@/errorBoundary'

import styles from './pageContainer.module.sass'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
const PageContainer: React.FC<Props> = ({ children, ...rest }) => {
  const style = clsx(styles['page-container'], `${rest.className}`)
  delete rest.className

  return (
    <ErrorBoundary>
      <div className={style} {...rest}>
        {children}
      </div>
    </ErrorBoundary>
  )
}

export default PageContainer
