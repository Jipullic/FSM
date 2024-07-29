import { flexRender, type Header } from '@tanstack/react-table'
import clsx from 'clsx'

import { ArrowSvg } from '@/utils/svgs'

import styles from './baseTableContentHeaderItem.module.sass'

interface Props<T extends object> {
  header: Header<T, unknown>
}

const ArrowUp = ArrowSvg({
  direction: 'up',
  className: 'w-5 h-5 inline'
})

const ArrowDown = ArrowSvg({
  direction: 'down',
  className: 'w-5 h-5 inline'
})

function BaseTableContentHeaderItem<T extends object>({ header }: Props<T>) {
  const style = clsx(styles['table-header-item'], {
    [styles['table-header-item-sorted']]: header.column.getIsSorted() as string
  })

  return (
    <th
      key={header.id}
      className={style}
      onClick={header.column.getToggleSortingHandler()}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      <div className={styles['table-header-arrow-svg']}>
        {{
          asc: ArrowUp,
          desc: ArrowDown
        }[header.column.getIsSorted() as string] ?? null}
      </div>
    </th>
  )
}

export default BaseTableContentHeaderItem
