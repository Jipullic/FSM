import clsx from 'clsx'
import type React from 'react'

import ChartSkeleton from '@/components/elements/chartSkeleton/chartSkeleton'
import CommonTooltip from '@/components/overlays/tooltips/common/commonTooltip'

import styles from './chartContainer.module.sass'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  tooltipDescription: string
  children: React.ReactNode
  isLoading?: boolean
}
const ChartContainer: React.FC<Props> = ({
  title,
  children,
  isLoading,
  ...rest
}) => {
  const style = clsx(styles['chart-container'], `${rest.className}`)
  delete rest.className

  return (
    <div className={style} {...rest}>
      <div>
        <div className={styles['chart-container-title']}>
          <span>{title}</span>
          <CommonTooltip description={rest.tooltipDescription} />
        </div>
      </div>
      {isLoading ? <ChartSkeleton /> : children}
    </div>
  )
}

export default ChartContainer
