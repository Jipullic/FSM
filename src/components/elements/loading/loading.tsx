import React, { type SVGProps } from 'react'

import { LoadingSvg } from '@/utils/svgs'

import styles from './loading.module.sass'

const Loading: React.FC<SVGProps<SVGSVGElement>> = ({ ...rest }) => {
  return (
    <div role='status'>
      <LoadingSvg className={styles.svg} {...rest} />
    </div>
  )
}

export default Loading
