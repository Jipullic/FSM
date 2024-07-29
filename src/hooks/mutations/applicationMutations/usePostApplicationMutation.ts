import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

import { queryClient } from '@/configs/queryClientConfig'
import { MUTATIONS_KEYS, QUERIES_KEYS } from '@/constants/queries'
import { applicationService } from '@/services/api/application/applicationService'
import type { ApplicationPost } from '@/services/api/application/applicationService.types'

const usePostApplicationMutation = ({
  ...rest
}: UseMutationOptions<any, any, any>) => {
  const { mutate } = useMutation({
    mutationKey: MUTATIONS_KEYS.application.post,
    mutationFn: async (application: ApplicationPost) => {
      const response = await applicationService.postApplication(application)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERIES_KEYS.application.all })
      queryClient.invalidateQueries({
        queryKey: QUERIES_KEYS.application.total
      })
    },
    ...rest
  })

  return mutate
}

export default usePostApplicationMutation
