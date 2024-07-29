import { SKELETON_COUNT_IN_LOADING_TABLE } from '@/constants/tables'

export function getTableEmptyRows<T extends object>() {
  const emptyRow: T = {} as T
  return Array.from({ length: SKELETON_COUNT_IN_LOADING_TABLE }, () => emptyRow)
}
