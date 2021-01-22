export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'
export const USER_DETAILS_RESET = 'USER_DETAILS_RESET'

export interface IUserDetails {
  _id: string
  name: string
  email: string
  isAdmin: boolean
}

export interface IUserState {
  user: IUserDetails | null
  loading: boolean
  error: string
}

interface IUserDetailsRequest {
  type: typeof USER_DETAILS_REQUEST
  payload: IUserDetails
}

interface IUserDetailsSuccess {
  type: typeof USER_DETAILS_SUCCESS
  payload: IUserDetails
}

interface IUserDetailsFail {
  type: typeof USER_DETAILS_FAIL
  payload: IUserDetails
}

interface IUserDetailsReset {
  type: typeof USER_DETAILS_RESET
  payload: IUserDetails
}

export type userDetailsAction = IUserDetailsRequest | IUserDetailsSuccess | IUserDetailsFail | IUserDetailsReset