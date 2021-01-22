import { UserAction, UserModel } from '../actions/userActions'

type UserState = {
  loading: boolean
  user: UserModel
  error: string | undefined
}

const initialState = {
  loading: false,
  user: {} as UserModel,
  error: undefined,
}

const UserReducer = (state: UserState = initialState, action: UserAction) => {

  switch(action.type) {

    case 'ON_LOADING':
      return {
        ...state,
        user: action.payload,
        loading: true

      }
    case 'ON_LOGIN':
      return {
        ...state,
        user: action.payload,
        loading: false

      }
    case 'ON_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export { UserReducer }