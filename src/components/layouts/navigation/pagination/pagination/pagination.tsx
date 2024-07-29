import React from 'react'

import { ArrowSvg } from '@/utils/svgs'

import styles from './pagination.module.sass'
import PaginationItem from '../paginationItem/paginationItem'

export interface PaginationProps {
  currentPage: number
  lastPage: number
  changePage: (page: number) => void
}

const moveToLeft = (currentPage: number): number => {
  if (currentPage < 1) return currentPage
  return currentPage - 1
}

const moveToRight = (currentPage: number, lastPage: number): number => {
  if (currentPage >= lastPage) return currentPage
  return currentPage + 1
}

const PreviousPaginationItem: React.FC<Omit<PaginationProps, 'lastPage'>> = ({
  currentPage,
  changePage
}) => (
  <PaginationItem onClick={() => changePage(moveToLeft(currentPage))}>
    {currentPage}
  </PaginationItem>
)

const CurrentPaginationItem: React.FC<
  Omit<PaginationProps, 'lastPage' | 'changePage'>
> = ({ currentPage }) => (
  <PaginationItem itemStyle='current'>{currentPage + 1}</PaginationItem>
)

const NextPaginationItem: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  changePage
}) => (
  <PaginationItem
    onClick={() => changePage(moveToRight(currentPage, lastPage))}
  >
    {currentPage + 2}
  </PaginationItem>
)

// const EmptyPaginationItem = () => <PaginationItem>...</PaginationItem>

// const FirstPaginationItem = () => (
//   <PaginationItem onClick={() => changePage(0)}>1</PaginationItem>
// )
// const LastPaginationItem = () => (
//   <PaginationItem onClick={() => changePage(lastPage)}>
//     {lastPage}
//   </PaginationItem>
// )

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  changePage
}) => {
  const PreviousItem = (
    <PreviousPaginationItem currentPage={currentPage} changePage={changePage} />
  )
  const CurrentItem = <CurrentPaginationItem currentPage={currentPage} />
  const NextItem = (
    <NextPaginationItem
      currentPage={currentPage}
      lastPage={lastPage}
      changePage={changePage}
    />
  )

  const Pagination = () => {
    if (currentPage === 0)
      return (
        <>
          {/* {PreviousItem} */}
          {CurrentItem}
          {currentPage !== lastPage && lastPage !== 0 && NextItem}
          {/* <EmptyPaginationItem /> */}
        </>
      )
    else if (currentPage === 1 && currentPage !== lastPage)
      return (
        <>
          {PreviousItem}
          {CurrentItem}
          {currentPage !== lastPage && NextItem}
        </>
      )
    else
      return (
        <>
          {/* <EmptyPaginationItem /> */}
          {PreviousItem}
          {CurrentItem}
        </>
      )
  }

  return (
    <nav>
      <ul className={styles['pagination-container']}>
        <PaginationItem
          onClick={() => changePage(moveToLeft(currentPage))}
          itemPosition='left'
        >
          <ArrowSvg direction='left' className='h-5 w-5' />
        </PaginationItem>

        <Pagination />

        <PaginationItem
          onClick={() => changePage(moveToRight(currentPage, lastPage))}
          itemPosition='right'
        >
          <ArrowSvg direction='right' className='h-5 w-5' />
        </PaginationItem>
      </ul>
    </nav>
  )
}

export default Pagination
