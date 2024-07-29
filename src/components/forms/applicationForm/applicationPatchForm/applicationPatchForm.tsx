import { useThrottleFn } from '@reactuses/core'
import type React from 'react'
import { memo, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import BaseForm from '@/components/forms/baseForm/baseForm/baseForm'
import {
  DeleteButton,
  UpdateButton
} from '@/components/forms/baseForm/baseFormButtons/baseFormButtons'
import ALERTS_MESSAGES from '@/constants/alertsMessages'
import useDeleteApplicationsMutation from '@/hooks/mutations/applicationMutations/useDeleteApplicationMutation'
import usePatchApplicationMutation from '@/hooks/mutations/applicationMutations/usePatchApplicationMutation'
import useAlertSetterContext from '@/hooks/useAlertContexts/useAlertSetterContext'
import { HookFormProvider } from '@/providers/hookFormProvider'
import type { FormProps } from '@/types/form'
import { type Application } from '@/types/services/application'
import {
  convertDatesToStringInObject,
  convertStringToDatesInObject
} from '@/utils/date'

import styles from './applicationPatchForm.module.sass'
import { applicationFormInputsConfig } from '../applicationForm.inputs'

export interface ApplicationPostFormProps<T extends object> extends FormProps {
  defaultData?: T
}

const ApplicationPostFormBody: React.FC<
  ApplicationPostFormProps<Application>
> = ({ defaultData, onAction }) => {
  const { addAlert } = useAlertSetterContext()
  const { handleSubmit, reset } = useFormContext<Application>()

  const mutatePatchApplication = usePatchApplicationMutation({
    onSettled: async (data) => {
      if (data) addAlert(ALERTS_MESSAGES.crud.successfulPatch)
      else addAlert(ALERTS_MESSAGES.crud.unsuccessfulPatch)
    }
  })

  const mutateDeleteApplication = useDeleteApplicationsMutation({
    onSettled: async (_, error) => {
      if (!error) addAlert(ALERTS_MESSAGES.crud.successfulDeleting)
      else addAlert(ALERTS_MESSAGES.crud.unsuccessfulDeleting)
    }
  })

  const { run: onPatchSubmitThrottled } = useThrottleFn(
    async (data: Application) => {
      data = convertStringToDatesInObject(data)
      console.log(data)
      mutatePatchApplication(data)
      onAction()
    },
    1000
  )

  const { run: onDeleteSubmitThrottled } = useThrottleFn(
    async (data: Application) => {
      mutateDeleteApplication([data.id])
      onAction()
    },
    1000
  )

  useEffect(() => {
    if (Object.keys(defaultData).length > 0)
      reset(convertDatesToStringInObject(defaultData))
  }, [defaultData])

  return (
    <form onClick={(e) => e.preventDefault()}>
      <div className={styles['inputs-container']}>
        <BaseForm formInputs={applicationFormInputsConfig} formType='update' />
      </div>
      <div className='flex gap-2'>
        <UpdateButton
          text='Обновить заявку'
          onClick={handleSubmit(onPatchSubmitThrottled)}
        />
        <DeleteButton
          text='Удалить заявку'
          onClick={handleSubmit(onDeleteSubmitThrottled)}
        />
      </div>
    </form>
  )
}

const ApplicationPostForm: React.FC<ApplicationPostFormProps<Application>> = ({
  ...props
}) => {
  return (
    <HookFormProvider<Application>
      formProps={{
        mode: 'onChange'
      }}
    >
      <ApplicationPostFormBody {...props} />
    </HookFormProvider>
  )
}

export default memo(ApplicationPostForm)
