import type React from 'react'
import type { ImgHTMLAttributes } from 'react'

import LogoSvg from '@/assets/images/logo.svg'
import { GARVEX_URL } from '@/constants/images'

const LogoImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  ...rest
}) => {
  return (
    <a href={GARVEX_URL}>
      <img src={LogoSvg} alt='Логотип' {...rest} />
    </a>
  )
}

export default LogoImage
