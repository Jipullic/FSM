import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState
} from '@tanstack/react-table'
import { useState, type Dispatch, type SetStateAction } from 'react'

export interface UseTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[] | ColumnDef<any>[] // any для других колонок которых нет в типе, например selection
  sorting?: SortingState
  setSorting?: Dispatch<SetStateAction<SortingState>>
}

// !!! обязательно стабильная ссылка для data (например useState или useMemo
// или внешняя константа) иначе бесконечный перерендер компонента
function useTable<T extends object>({
  data,
  columns,
  sorting,
  setSorting
}: UseTableProps<T>) {
  const [rowSelection, setRowSelection] = useState<Record<number, boolean>>({})

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      sorting: sorting ?? null
    },
    enableRowSelection: true, //enable row selection for all rows
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting ?? null
  })

  return { table, rowSelection, sorting }
}

export default useTable
