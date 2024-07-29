import type React from 'react'

import Button from '@/components/elements/button/button'

import styles from './advancedTableAction.module.sass'

export interface AdvancedTableActionProps {
  layer: 'main' | 'menu'
  onClick: () => void
  children: React.ReactNode
}

const AdvancedTableAction: React.FC<AdvancedTableActionProps> = ({
  layer,
  onClick,
  children
}) => {
  if (layer === 'main')
    return (
      <Button buttonStyle='primary' onClick={onClick}>
        <div className={styles['main-action']}>{children}</div>
      </Button>
    )
  return (
    <li className={styles['menu-action']} onClick={onClick}>
      {children}
    </li>
  )
}

export default AdvancedTableAction
