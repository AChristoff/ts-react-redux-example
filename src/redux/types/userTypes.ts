// Model
export interface UserLoginModel {
  firstName: string
  lastName: string
  subscription: string
  token: string
}

// Action Types and Constants
export interface LoadingLoginAction {
  readonly type: 'USER_LOGIN_REQUEST'
  payload: UserLoginModel
  loading: boolean
}
export interface LoginAction {
  readonly type: 'USER_LOGIN_SUCCESS'
  payload: UserLoginModel
  loading: boolean
}

export interface ErrorLoginAction {
  readonly type: 'USER_LOGIN_ERROR'
  payload: any
  loading: boolean
}

export type UserLoginAction = LoadingLoginAction | LoginAction | ErrorLoginAction