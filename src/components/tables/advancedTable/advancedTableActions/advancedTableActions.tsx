import clsx from 'clsx'
import type React from 'react'

import Button from '@/components/elements/button/button'
import useToggleHidden from '@/hooks/useToggleHidden'
import { ArrowSvg } from '@/utils/svgs'

import styles from './advancedTableActions.module.sass'
import type { AdvancedTableActionProps } from '../advancedTableAction/advancedTableAction'
import AdvancedTableAction from '../advancedTableAction/advancedTableAction'

export interface AdvancedTableActionsProps {
  tableActionsProps: Record<string, AdvancedTableActionProps>
}

const AdvancedTableActions: React.FC<AdvancedTableActionsProps> = ({
  tableActionsProps
}) => {
  const [actionsDropdownRef, toggleHidden] = useToggleHidden<HTMLDivElement>()
  const actionsDropdownStyle = clsx('hidden', styles['actions-dropdown'])

  return (
    <div className={styles.container}>
      {Object.entries(tableActionsProps)
        .filter(([, tableActionProps]) => tableActionProps.layer === 'main')
        .map(([name, tableActionProps]) => (
          <AdvancedTableAction key={name} {...tableActionProps} />
        ))}
      <Button buttonStyle='secondary' onClick={toggleHidden}>
        <ArrowSvg direction='down' className='-ml-1 mr-1.5 h-5 w-5' />
        Действия
      </Button>
      <div className={actionsDropdownStyle} ref={actionsDropdownRef}>
        <ul className={styles['actions-menu']}>
          {Object.entries(tableActionsProps)
            .filter(([, tableActionProps]) => tableActionProps.layer === 'menu')
            .map(([name, tableActionProps]) => (
              <AdvancedTableAction key={name} {...tableActionProps} />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default AdvancedTableActions
