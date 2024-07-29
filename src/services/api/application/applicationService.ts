import type { AxiosResponse } from 'axios'

import { API } from '@/configs/axiosConfig'
import URLS from '@/constants/apiUrls'
import type { Application } from '@/types/services/application'
import type { PaginationParams, Total } from '@/types/services/pagination'

import type { ApplicationPost } from './applicationService.types'

export class ApplicationService {
  async getAllApplication(
    paginationParams: PaginationParams<Application>
  ): Promise<AxiosResponse<Application[]>> {
    return await API.get<Application[]>(URLS.application.getAll, {
      params: paginationParams
    })
  }

  async getApplicationById(id: number): Promise<AxiosResponse<Application>> {
    return await API.get<Application>(`${URLS.application.get}/${id}`)
  }

  async getTotalApplication(): Promise<AxiosResponse<Total>> {
    return await API.get<Total>(URLS.application.getTotal)
  }

  async postApplication(
    application: ApplicationPost
  ): Promise<AxiosResponse<Application>> {
    return await API.post<Application>(URLS.application.post, application)
  }

  async patchApplication(
    application: ApplicationPost
  ): Promise<AxiosResponse<Application>> {
    return await API.patch<Application>(URLS.application.patch, application)
  }

  async deleteApplication(idsApplications: number[]): Promise<AxiosResponse> {
    return await API.delete(URLS.application.post, { data: idsApplications })
  }
}

export const applicationService = new ApplicationService()
