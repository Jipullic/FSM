export type AlertType = 'info' | 'success' | 'warning' | 'error'

export interface Alert {
  id: number
  message: string
  type: AlertType
  durationSeconds?: number
}

export type AlertAdding = Omit<Alert, 'id'>
