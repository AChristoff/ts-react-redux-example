import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  IUserState,
  userDetailsAction
} from '../constants/userConstants'


export const userDetailsReducer = (state = { user: {} }, action: userDetailsAction) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload , error: ''}
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    case USER_DETAILS_RESET: 
      return { user: {} }
    default:
      return state
  }
}
