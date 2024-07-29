import { type ColumnDef } from '@tanstack/react-table'

import Checkbox from '@/components/elements/checkbox/checkbox'
import { getFormattedDate } from '@/utils/date'

export interface TableSelection {
  select: 'select'
}

export type GenerateTableColumnsResult<T extends TableSelection | object> =
  ColumnDef<T> | null

export function generateTableColumns<T extends TableSelection | object>(
  headers: Record<keyof T, string>,
  handleColumns?: (key: keyof T) => GenerateTableColumnsResult<T>
): ColumnDef<T>[] {
  // const columnHelperTable = createColumnHelper<T>()
  const keys = Object.keys(headers) as (keyof T)[]

  const tableColumns: ColumnDef<T>[] = keys.map((key) => {
    if (handleColumns !== undefined) {
      const columnDev = handleColumns(key)
      if (columnDev !== null) return columnDev
    }

    if (key === 'select') {
      return {
        accessorKey: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            // disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
        enableSorting: false
      }
    }

    return {
      accessorKey: key,
      header: () => headers[key],
      cell: (info) => {
        const data = info.getValue()
        if (Object.prototype.toString.call(data) === '[object Date]')
          return getFormattedDate(new Date(data as string))
        return data
      }
    }
  })

  return tableColumns
}
