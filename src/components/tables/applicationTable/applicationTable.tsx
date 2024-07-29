import type { SortingState } from '@tanstack/react-table'
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import ModalContainer from '@/components/containers/modalContainer/modalContainer'
import YesNoToggle from '@/components/elements/yesNoToggle/yesNoToggle'
import AdvancedTable from '@/components/tables/advancedTable/advancedTable/advancedTable'
import ALERTS_MESSAGES from '@/constants/alertsMessages'
import { ModalNames } from '@/constants/modals'
import { APPLICATION_PAGE_SIZE } from '@/constants/queries'
import ErrorBoundary from '@/errorBoundary'
import useDeleteApplicationsMutation from '@/hooks/mutations/applicationMutations/useDeleteApplicationMutation'
import useAllApplicationQuery from '@/hooks/queries/applicationQueries/useAllApplicationQuery'
import useTotalApplicationQuery from '@/hooks/queries/applicationQueries/useTotalApplicationQuery'
import useAlertSetterContext from '@/hooks/useAlertContexts/useAlertSetterContext'
import useModalSetterContext from '@/hooks/useModalContexts/useModalSetterContext'
import useTable from '@/hooks/useTable'
import { type Application } from '@/types/services/application'
import type { QueryPaginationParams } from '@/types/services/pagination'
import { getTableEmptyRows } from '@/utils/table/getTableEmptyRows'

import { tableActionsProps } from './applicationTable.actions'
import {
  applicationColumns,
  type ApplicationColumnsType
} from './applicationTable.columns'

interface Props {
  onClickRow?: (row: Application) => void
}

const ApplicationTable: React.FC<Props> = ({ onClickRow }) => {
  // Context
  const { addAlert } = useAlertSetterContext()
  const { toggleModal } = useModalSetterContext()

  // states
  const [sorting, setSorting] = useState<SortingState>([])
  const [actions, setActions] = useState(tableActionsProps)

  const currentSorting: Partial<QueryPaginationParams<Application>> =
    sorting.length > 0
      ? ({
          sortBy: sorting[0].id,
          sortDirection: sorting[0].desc ? 'desc' : 'asc'
        } as Partial<QueryPaginationParams<Application>>)
      : {}

  // Queries
  const { total } = useTotalApplicationQuery()
  const { applications, isLoading, isError, currentPage, setCurrentPage } =
    useAllApplicationQuery({
      count: APPLICATION_PAGE_SIZE,
      ...currentSorting
    })

  // Mutations
  const mutateDeleteApplications = useDeleteApplicationsMutation({
    onSettled: async (_, error) => {
      if (!error) addAlert(ALERTS_MESSAGES.crud.successfulDeleting)
      else addAlert(ALERTS_MESSAGES.crud.unsuccessfulDeleting)
    }

    // TODO: изменение номера текущей страницы если удалили всё с неё
  })

  // Table
  const tableData = useMemo(() => {
    if (isLoading) return getTableEmptyRows<ApplicationColumnsType>()
    return applications ?? []
  }, [isLoading, applications])

  const { table, rowSelection } = useTable<Application>({
    data: tableData,
    columns: applicationColumns,
    sorting,
    setSorting
  })

  const rowSelectionRef = useRef(rowSelection)
  const applicationsRef = useRef(applications)

  // functions
  const deleteApplications = useCallback(() => {
    const currentRowSelection = rowSelectionRef.current
    const currentApplications = applicationsRef.current

    const keys = Object.keys(currentRowSelection).map(Number)
    mutateDeleteApplications(
      keys
        .map((key) => currentApplications[key])
        .map((application) => application.id)
    )
    table.setRowSelection({})
  }, [rowSelectionRef, applicationsRef, table])

  // useEffects
  useEffect(() => {
    if (isError) {
      addAlert(ALERTS_MESSAGES.serverError)
    }
  }, [isError])

  useEffect(() => {
    table.setRowSelection({})
  }, [currentPage])

  useEffect(() => {
    rowSelectionRef.current = rowSelection
  }, [rowSelection, applications])

  useEffect(() => {
    applicationsRef.current = applications
  }, [applications])

  useEffect(() => {
    setActions((prevActions) => ({
      ...prevActions,
      add: {
        ...prevActions.add,
        onClick: () => {
          toggleModal(ModalNames.addApplication)
        }
      }
    }))
  }, [toggleModal])

  useEffect(() => {
    const deleteApplications = () => {
      const currentRowSelection = rowSelectionRef.current

      if (Object.keys(currentRowSelection).length !== 0 && applications) {
        toggleModal(ModalNames.yesNoToggle)
      } else {
        addAlert(ALERTS_MESSAGES.noSelectedRows)
      }
    }

    setActions((prevActions) => ({
      ...prevActions,
      delete: {
        ...prevActions.delete,
        onClick: deleteApplications
      }
    }))
  }, [rowSelection])

  // Memoized variables
  const lastPage = useMemo(() => {
    if (!total) return 0
    const totalPages = total?.total / APPLICATION_PAGE_SIZE
    return Math.ceil(totalPages) - 1
  }, [total])

  return (
    <ErrorBoundary>
      <AdvancedTable<ApplicationColumnsType>
        table={table}
        tableActionsProps={actions}
        total={total?.total ?? 0}
        isLoading={isLoading}
        itemCountPerPage={APPLICATION_PAGE_SIZE}
        currentPage={currentPage}
        lastPage={lastPage}
        changePage={setCurrentPage}
        onClickRow={onClickRow}
      />
      <ModalContainer type='confirm' name={ModalNames.yesNoToggle}>
        <YesNoToggle
          title='Вы уверены, что хотите удалить выбранные заявки?'
          yesText='Да, удалить'
          noText='Отмена'
          yesAction={() => {
            deleteApplications()
            toggleModal(ModalNames.yesNoToggle)
          }}
          noAction={() => toggleModal(ModalNames.yesNoToggle)}
        />
      </ModalContainer>
    </ErrorBoundary>
  )
}

export default memo(ApplicationTable)
