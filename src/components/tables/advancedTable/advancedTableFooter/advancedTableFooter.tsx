import React, { memo } from 'react'

import Pagination, {
  type PaginationProps
} from '@/components/layouts/navigation/pagination/pagination/pagination'

import styles from './advancedTableFooter.module.sass'

export interface TableFooterProps extends PaginationProps {
  total: number
  itemCountPerPage: number
}

const AdvancedTableFooter: React.FC<TableFooterProps> = ({
  total,
  itemCountPerPage,
  currentPage,
  lastPage,
  changePage
}) => {
  const startPage =
    currentPage === 0 && total !== 0 ? 1 : currentPage * itemCountPerPage
  const endPage =
    (currentPage + 1) * itemCountPerPage > total
      ? total
      : (currentPage + 1) * itemCountPerPage

  return (
    <div className={styles['footer-container']}>
      <span className='space-x-1 text-gray-500 dark:text-gray-400'>
        <span>{`${startPage}-${endPage}`}</span>
        <span>из</span>
        <span>{total}</span>
      </span>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        changePage={changePage}
      />
    </div>
  )
}

export default memo(AdvancedTableFooter)
