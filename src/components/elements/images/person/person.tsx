import type React from 'react'
import type { ImgHTMLAttributes } from 'react'

import PersonSvg from '@/assets/images/person.png'

const PersonImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  ...rest
}) => {
  return <img src={PersonSvg} alt='аватарка' {...rest} />
}

export default PersonImage
