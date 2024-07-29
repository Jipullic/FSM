import { type Table as ReactTable } from '@tanstack/react-table'

import styles from './baseTable.module.sass'
import BaseTableContentHeader from '../baseTableContentHeader/baseTableContentHeader'
import BaseTableContentRows, {
  type tableContentRowsProps
} from '../baseTableContentRow/baseTableContentRow'

export interface BaseTableProps<T> extends tableContentRowsProps<T> {
  table: ReactTable<T>
  isLoading: boolean
}

function BaseTable<T extends object>({
  table,
  isLoading = false,
  onClickRow = () => null
}: BaseTableProps<T>) {
  return (
    <section className={styles.container}>
      <table className={styles['table-container']}>
        <BaseTableContentHeader<T> table={table} />
        <BaseTableContentRows<T>
          table={table}
          isLoading={isLoading}
          onClickRow={onClickRow}
        />
      </table>
    </section>
  )
}

export default BaseTable
