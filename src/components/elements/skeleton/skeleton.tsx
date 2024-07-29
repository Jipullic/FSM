import clsx from 'clsx'
import React, { type HTMLAttributes } from 'react'

import styles from './skeleton.module.sass'

const Skeleton: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => {
  return <div className={clsx(styles.skeleton, rest.className)} {...rest}></div>
}

export default Skeleton
