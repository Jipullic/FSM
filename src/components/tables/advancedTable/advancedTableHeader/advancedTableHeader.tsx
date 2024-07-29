import type React from 'react'
import { memo } from 'react'

import styles from './advancedTableHeader.module.sass'
import AdvancedTableActions, {
  type AdvancedTableActionsProps
} from '../advancedTableActions/advancedTableActions'

export interface TableHeaderProps extends AdvancedTableActionsProps {
  total: number
}

const AdvancedTableHeader: React.FC<TableHeaderProps> = ({
  tableActionsProps,
  total
}) => {
  return (
    <div className={styles.container}>
      <div className='flex flex-1 items-center space-x-4'>
        <h5>
          <span className='mr-1 text-gray-500'>Всего:</span>
          <span className='dark:text-white'>{total}</span>
        </h5>
      </div>
      <AdvancedTableActions tableActionsProps={tableActionsProps} />
    </div>
  )
}

export default memo(AdvancedTableHeader)
