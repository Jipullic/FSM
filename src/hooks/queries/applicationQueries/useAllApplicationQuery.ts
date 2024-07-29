import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { QUERIES_KEYS } from '@/constants/queries'
import { applicationService } from '@/services/api/application/applicationService'
import type { Application } from '@/types/services/application'
import type {
  QueryPaginationParams,
  PaginationParams
} from '@/types/services/pagination'
import { convertStringToDatesInObject } from '@/utils/date'

function useAllApplicationQuery(
  queryPaginationParams: QueryPaginationParams<Application>
) {
  const [currentPage, setCurrentPage] = useState(0)
  const offset = currentPage * queryPaginationParams.count
  const { data, isLoading, isError } = useQuery<Application[]>({
    queryKey: [
      ...QUERIES_KEYS.application.all,
      offset,
      queryPaginationParams.count,
      queryPaginationParams?.startDatetime,
      queryPaginationParams?.sortBy,
      queryPaginationParams?.sortDirection
    ],
    queryFn: async () => {
      const paginationParams = {
        ...queryPaginationParams,
        offset: offset
      } as PaginationParams<Application>
      const response =
        await applicationService.getAllApplication(paginationParams)

      return convertStringToDatesInObject(response.data)
    }
  })

  return {
    applications: data,
    isLoading,
    isError,
    currentPage,
    setCurrentPage
  }
}

export default useAllApplicationQuery
