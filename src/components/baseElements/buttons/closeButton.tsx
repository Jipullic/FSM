import type React from 'react'
import type { ButtonHTMLAttributes } from 'react'

import { CrossSvg } from '@/utils/svgs'

const CloseButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...rest
}) => {
  return (
    <button {...rest}>
      <CrossSvg className='h-4 w-4'></CrossSvg>
    </button>
  )
}

export default CloseButton
