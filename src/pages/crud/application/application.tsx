import { useState } from 'react'

import ModalContainer from '@/components/containers/modalContainer/modalContainer'
import PageContainer from '@/components/containers/pageContainer/pageContainer'
import ApplicationPatchForm from '@/components/forms/applicationForm/applicationPatchForm/applicationPatchForm'
import ApplicationPostForm from '@/components/forms/applicationForm/applicationPostForm/applicationPostForm'
import Header from '@/components/layouts/header/header'
import ApplicationTable from '@/components/tables/applicationTable/applicationTable'
import { ModalNames } from '@/constants/modals'
import useModalSetterContext from '@/hooks/useModalContexts/useModalSetterContext'
import type { Application } from '@/types/services/application'

const Application = () => {
  const { toggleModal } = useModalSetterContext()

  const [updateApplication, setUpdateApplication] = useState({} as Application)

  const onClickRow = (application: Application) => {
    setUpdateApplication(application)
    toggleModal(ModalNames.updateApplication)
  }

  return (
    <>
      <PageContainer>
        <Header></Header>
        <ApplicationTable onClickRow={onClickRow} />
      </PageContainer>

      {/* //// Modals //// */}
      <ModalContainer
        name={ModalNames.addApplication}
        type='common'
        title='Создать заявку'
      >
        <ApplicationPostForm
          onAction={() => toggleModal(ModalNames.addApplication)}
        />
      </ModalContainer>

      <ModalContainer
        name={ModalNames.updateApplication}
        type='common'
        title='Редактировать заявку'
      >
        <ApplicationPatchForm
          defaultData={updateApplication}
          onAction={() => toggleModal(ModalNames.updateApplication)}
        />
      </ModalContainer>
    </>
  )
}

export default Application
