import { type Table } from '@tanstack/react-table'

import styles from './baseTableContentHeader.module.sass'
import BaseTableContentHeaderItem from '../baseTableContentHeaderItem/baseTableContentHeaderItem'

interface Props<T> {
  table: Table<T>
}

function BaseTableContentHeader<T extends object>({ table }: Props<T>) {
  return (
    <thead className={styles['table-header']}>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <BaseTableContentHeaderItem key={header.id} header={header} />
          ))}
        </tr>
      ))}
    </thead>
  )
}

export default BaseTableContentHeader
