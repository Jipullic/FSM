import { useThrottleFn } from '@reactuses/core'
import type React from 'react'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

import BaseForm from '@/components/forms/baseForm/baseForm/baseForm'
import { CreateButton } from '@/components/forms/baseForm/baseFormButtons/baseFormButtons'
import ALERTS_MESSAGES from '@/constants/alertsMessages'
import usePostApplicationMutation from '@/hooks/mutations/applicationMutations/usePostApplicationMutation'
import useAlertSetterContext from '@/hooks/useAlertContexts/useAlertSetterContext'
import { HookFormProvider } from '@/providers/hookFormProvider'
import type { FormProps } from '@/types/form'
import type { Application } from '@/types/services/application'
import { convertStringToDatesInObject } from '@/utils/date'

import styles from './applicationPostForm.module.sass'
import { applicationFormInputsConfig } from '../applicationForm.inputs'

const ApplicationPostFormBody: React.FC<FormProps> = ({ onAction }) => {
  const { addAlert } = useAlertSetterContext()
  const { handleSubmit } = useFormContext<Application>()
  const mutatePostApplication = usePostApplicationMutation({
    onSettled: async (data) => {
      if (data) addAlert(ALERTS_MESSAGES.crud.successfulAdding)
      else addAlert(ALERTS_MESSAGES.crud.unsuccessfulAdding)
    }
  })

  const { run: onSubmitThrottled } = useThrottleFn(
    async (data: Application) => {
      data = convertStringToDatesInObject(data)
      mutatePostApplication(data)
      onAction()
    },
    1000
  )

  return (
    <form onClick={(e) => e.preventDefault()}>
      <div className={styles['inputs-container']}>
        <BaseForm formInputs={applicationFormInputsConfig} formType='create' />
      </div>
      <CreateButton
        text='Создать заявку'
        onClick={handleSubmit(onSubmitThrottled)}
      />
    </form>
  )
}

const ApplicationPostForm: React.FC<FormProps> = ({ ...props }) => {
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
