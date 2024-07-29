import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useModalSetterContext from '@/hooks/useModalContexts/useModalSetterContext'
import { getFormatLocationPathname } from '@/utils/getLocationPathname'

const ModalsCleanup = () => {
  const { clearModals } = useModalSetterContext()
  const location = useLocation()

  const currentPage = getFormatLocationPathname(location.pathname)
  const [lastPage, setLastPage] = useState(currentPage)

  useEffect(() => {
    if (currentPage !== lastPage) {
      clearModals()
      setLastPage(currentPage)
    }
  }, [location.pathname])

  return null
}

export default ModalsCleanup
