import { UserLoginAction, UserLoginModel } from '../types/userTypes'

type UserLoginState = {
  loading: boolean
  user: UserLoginModel
  error: string | undefined
}

const initialLoginState = {
  loading: false,
  user: {} as UserLoginModel,
  error: undefined,
}

export const userLoginReducer = (state: UserLoginState = initialLoginState, action: UserLoginAction) => {

  switch(action.type) {

    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
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
