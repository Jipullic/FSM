import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

import { queryClient } from '@/configs/queryClientConfig'
import { MUTATIONS_KEYS, QUERIES_KEYS } from '@/constants/queries'
import { applicationService } from '@/services/api/application/applicationService'

const useDeleteApplicationsMutation = ({
  ...rest
}: UseMutationOptions<any, any, any>) => {
  const { mutate } = useMutation({
    mutationKey: MUTATIONS_KEYS.application.delete,
    mutationFn: async (idsApplications: number[]) => {
      await applicationService.deleteApplication(idsApplications)
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

export default useDeleteApplicationsMutation
