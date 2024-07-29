import type React from 'react'

import Button from '@/components/elements/button/button'
import { PlusSvg, TrashSvg } from '@/utils/svgs'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export const CreateButton: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Button buttonStyle='primary' {...rest}>
      <div className='-ml-1 flex items-center justify-center'>
        <PlusSvg className='mr-2 h-5 w-5' />
        {text}
      </div>
    </Button>
  )
}

export const UpdateButton: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Button buttonStyle='primary' {...rest}>
      {text}
    </Button>
  )
}

export const DeleteButton: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <button
      type='button'
      className='inline-flex items-center rounded-lg border border-red-600 px-2 py-2 font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'
      {...rest}
    >
      <TrashSvg className='mr-1 h-5 w-5' />
      {text}
    </button>
  )
}
