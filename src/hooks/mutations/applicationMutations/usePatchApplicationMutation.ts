import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

import { queryClient } from '@/configs/queryClientConfig'
import { MUTATIONS_KEYS, QUERIES_KEYS } from '@/constants/queries'
import { applicationService } from '@/services/api/application/applicationService'
import type { ApplicationPost } from '@/services/api/application/applicationService.types'

const usePatchApplicationMutation = ({
  ...rest
}: UseMutationOptions<any, any, any>) => {
  const { mutate } = useMutation({
    mutationKey: MUTATIONS_KEYS.application.patch,
    mutationFn: async (application: ApplicationPost) => {
      const response = await applicationService.patchApplication(application)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERIES_KEYS.application.all })
    },
    ...rest
  })

  return mutate
}

export default usePatchApplicationMutation
