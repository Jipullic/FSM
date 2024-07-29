import type React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export const LoadingSvg: React.FC<Props> = ({ ...rest }) => {
  return (
    <svg viewBox='0 0 100 101' {...rest}>
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='currentColor'
      />
      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentFill'
      />
    </svg>
  )
}

export const InfoSvg: React.FC<Props> = ({ ...rest }) => (
  <svg fill='currentColor' viewBox='0 0 20 20' {...rest}>
    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
  </svg>
)

export const CrossSvg: React.FC<Props> = ({ ...rest }) => (
  <svg viewBox='0 0 14 14' {...rest}>
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
    />
  </svg>
)

export const PlusSvg: React.FC<Props> = ({ ...rest }) => {
  return (
    <svg fill='currentColor' viewBox='0 0 20 20' {...rest}>
      <path
        clipRule='evenodd'
        fillRule='evenodd'
        d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
      />
    </svg>
  )
}

/* 
Arrows
*/

interface ArrowProps extends Props {
  direction: 'left' | 'up' | 'right' | 'down'
}

const rotateDegrees = {
  left: 90,
  up: 180,
  right: 270,
  down: 0
}

export const ArrowSvg: React.FC<ArrowProps> = ({ direction, ...rest }) => {
  const degrees = rotateDegrees[direction]

  return (
    <svg fill='currentColor' viewBox='0 0 20 20' {...rest}>
      <path
        fillRule='evenodd'
        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
        clipRule='evenodd'
        transform={`rotate(${degrees} 10 10)`}
      />
    </svg>
  )
}

/* 
Warning
*/

export const WarningSvg: React.FC<Props> = ({ ...rest }) => (
  <svg fill='none' viewBox='0 0 20 20' {...rest}>
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
    />
  </svg>
)

/* 
Trash
*/

export const TrashSvg: React.FC<Props> = ({ ...rest }) => (
  <svg fill='currentColor' viewBox='0 0 20 20' {...rest}>
    <path
      fillRule='evenodd'
      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
      clipRule='evenodd'
    ></path>
  </svg>
)
