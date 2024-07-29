import { flexRender, type Table } from '@tanstack/react-table'

import Skeleton from '@/components/elements/skeleton/skeleton'

import styles from './baseTableContentRow.module.sass'
import { useCallback } from 'react'

export interface tableContentRowsProps<T> {
  table: Table<T>
  isLoading: boolean
  onClickRow?: (row: any) => void
}

function BaseTableContentRows<T extends object>({
  table,
  isLoading = false,
  onClickRow = () => null
}: tableContentRowsProps<T>) {
  const handleRowClick = useCallback(
    (event: React.MouseEvent, row: any) => {
      // Предотвращаем клик, если цель - чекбокс
      if ((event.target as HTMLElement).closest('input[type="checkbox"]')) {
        return
      }
      onClickRow?.(row.original)
    },
    [onClickRow]
  )

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          // className='h-20'
          className={styles['table-row']}
        >
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className={styles['table-data']}
              onClick={(event) => handleRowClick(event, row)}
            >
              {isLoading ? (
                <Skeleton />
              ) : (
                flexRender(cell.column.columnDef.cell, cell.getContext())
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default BaseTableContentRows
