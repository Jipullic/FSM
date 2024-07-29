import clsx from 'clsx'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'

import { InfoSvg } from '@/utils/svgs'

import styles from './commonTooltip.module.sass'

interface Props {
  description: string
}

const CommonTooltip: React.FC<Props> = ({ description }) => {
  const [visible, setVisible] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>()

  const style = clsx(
    styles['tooltip'],
    visible ? 'animate-zoom-in-center inline-block' : 'hidden'
  )

  const showTooltip = () => {
    setVisible(true)
  }

  const hideTooltip = () => {
    setVisible(false)
  }

  useEffect(() => {
    const tooltipEl = tooltipRef.current
    if (tooltipEl) {
      const bounding = tooltipEl.getBoundingClientRect()
      if (bounding.right > window.innerWidth) {
        tooltipEl.style.left = `-${bounding.width / 2}px`
      } else {
        tooltipEl.style.left = '0'
      }
    }
  }, [visible])

  return (
    <div
      className='relative inline-block'
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <InfoSvg className='h-4 w-4' />
      <div ref={tooltipRef} className={style}>
        {description}
      </div>
    </div>
  )
}

export default CommonTooltip
