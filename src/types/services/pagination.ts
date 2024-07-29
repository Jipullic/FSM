import type { QueryAdditionalParams } from './queryAdditionalParams'

export type SortDirection = 'asc' | 'desc'

export interface PaginationParams<T extends object>
  extends QueryAdditionalParams {
  offset: number
  count: number
  sortBy?: keyof T
  sortDirection?: SortDirection
}

export interface QueryPaginationParams<T extends object>
  extends QueryAdditionalParams {
  count: number
  sortBy?: keyof T
  sortDirection?: SortDirection
}

export interface Total {
  total: number
}
