import type { Application } from '@/types/services/application'

export type ApplicationPost = Omit<Application, 'id' | 'createDate'>
export type ApplicationUpdate = Omit<Application, 'createDate'>
