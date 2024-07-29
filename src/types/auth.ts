export enum Role {
  Director,
  Manager
}

export interface User {
  username: string
  firstname: string
  lastname: string
  middlename: string
  role: Role
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface JwtPayload {
  username: string
  role: 'Director' | 'Manager' // Role in string
  firstname: string
  lastname: string
  middlename: string
  nbf: number
  exp: number
  iss: string
  aud: string
}
