import type { AdvancedTableActionProps } from '@/components/tables/advancedTable/advancedTableAction/advancedTableAction'
import { PlusSvg } from '@/utils/svgs'

type NameAction = 'add' | 'delete'

export const tableActionsProps: Record<NameAction, AdvancedTableActionProps> = {
  add: {
    layer: 'main',
    onClick: () => null,
    children: (
      <>
        <PlusSvg className='mr-2 h-5 w-5' />
        Добавить
      </>
    )
  },
  delete: {
    layer: 'menu',
    onClick: () => null,
    children: <>Удалить выбранные</>
  }
}
