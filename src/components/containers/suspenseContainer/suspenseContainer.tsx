import React, { Suspense } from 'react'

import Loading from '@/pages/loading/loading'

interface Props {
  children: React.ReactNode
}

const SuspenseContainer: React.FC<Props> = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default SuspenseContainer
