const ChartSkeleton = () => {
  return (
    <div className='animate-pulse dark:border-gray-700'>
      <div className='mx-2 flex items-baseline'>
        <div className='h-48 w-full rounded-lg bg-gray-200 dark:bg-gray-700'></div>
        <div className='ms-6 h-32 w-full rounded-lg bg-gray-200 dark:bg-gray-700'></div>
        <div className='ms-6 h-48 w-full rounded-lg bg-gray-200 dark:bg-gray-700'></div>
        <div className='ms-6 h-40 w-full rounded-lg bg-gray-200 dark:bg-gray-700'></div>
        <div className='ms-6 h-56 w-full rounded-lg bg-gray-200 dark:bg-gray-700'></div>
        <div className='ms-6 h-48 w-full rounded-lg bg-gray-200 dark:bg-gray-700'></div>
        <div className='ms-6 h-56 w-full rounded-lg bg-gray-200 dark:bg-gray-700'></div>
      </div>
    </div>
  )
}

export default ChartSkeleton
