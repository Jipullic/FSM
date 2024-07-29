import BaseTable, {
  type BaseTableProps
} from '@/components/tables/baseTable/baseTable/baseTable'

import styles from './advancedTable.module.sass'
import AdvancedTableFooter, {
  type TableFooterProps
} from '../advancedTableFooter/advancedTableFooter'
import AdvancedTableHeader, {
  type TableHeaderProps
} from '../advancedTableHeader/advancedTableHeader'

interface Props<T>
  extends BaseTableProps<T>,
    TableHeaderProps,
    TableFooterProps {}

function AdvancedTable<T extends object>({ ...props }: Props<T>) {
  return (
    <section className={styles['table-container']}>
      <AdvancedTableHeader
        tableActionsProps={props.tableActionsProps}
        total={props.total}
      />
      <div className='mobile-container'>
        <BaseTable<T>
          table={props.table}
          isLoading={props.isLoading}
          onClickRow={props.onClickRow}
        ></BaseTable>
      </div>
      <AdvancedTableFooter
        total={props.total}
        itemCountPerPage={props.itemCountPerPage}
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        changePage={props.changePage}
      />
    </section>
  )
}

export default AdvancedTable
