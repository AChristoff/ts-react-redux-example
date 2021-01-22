import { UserLoginAction, UserLoginModel } from '../types/userTypes'

export type UserLoginState = {
  loading: boolean
  user: UserLoginModel
  error: string | null
}

const initialLoginState = {
  loading: false,
  user: {} as UserLoginModel,
  error: null,
}

export const userLoginReducer = (state: UserLoginState = initialLoginState, action: UserLoginAction) => {

  switch(action.type) {

    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: true
      }
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case 'USER_LOGIN_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
