import clsx from 'clsx'
import React from 'react'

import styles from './paginationItem.module.sass'

interface PaginationItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  itemStyle?: 'common' | 'current'
  itemPosition?: 'left' | 'middle' | 'right'
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  children,
  itemStyle = 'common',
  itemPosition = 'middle',
  ...rest
}) => {
  const style = clsx(styles['pagination-item'], {
    'rounded-l-lg': itemPosition === 'left',
    'rounded-r-lg': itemPosition === 'right',
    [styles['pagination-item-current']]: itemStyle === 'current'
  })

  return (
    <li>
      <button className={style} {...rest}>
        {children}
      </button>
    </li>
  )
}

export default PaginationItem
