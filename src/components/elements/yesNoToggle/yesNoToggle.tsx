import type React from 'react'

import { WarningSvg } from '@/utils/svgs'

interface Props {
  title: string
  yesText: string
  noText: string
  yesAction: () => void
  noAction: () => void
}

const YesNoToggle: React.FC<Props> = ({
  title,
  yesText,
  noText,
  yesAction,
  noAction
}) => {
  return (
    <div className='text-center'>
      <WarningSvg className='mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200' />
      <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
        {title}
      </h3>
      <button
        type='button'
        className='inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800'
        onClick={yesAction}
      >
        {yesText}
      </button>
      <button
        type='button'
        className='ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
        onClick={noAction}
      >
        {noText}
      </button>
    </div>
  )
}

export default YesNoToggle
