import axios from 'axios'
import { Dispatch } from 'react'

export interface UserModel {
  firstName: string
  lastName: string
  subscription: string
  token: string
}

export interface LoadingAction {
  readonly type: 'ON_LOADING'
  payload: any
  loading: boolean
}
export interface LoginAction {
  readonly type: 'ON_LOGIN'
  payload: UserModel
  loading: boolean
}

export interface ErrorAction {
  readonly type: 'ON_ERROR'
  payload: any
  loading: boolean
}

export type UserAction = LoginAction | ErrorAction | LoadingAction

export const onLogin = (email: string, password: string) => async (dispatch: Dispatch<UserAction>) => {
  try {

    dispatch({
      type: 'ON_LOADING',
      payload: '',
      loading: true
    })

    const response = await axios.post<UserModel>(
      'https://netflix-example.herokuapp.com/user/mock-login',
      {
        email,
        password,
      }
    )

    if (!response) {
      dispatch({
        type: 'ON_ERROR',
        payload: 'Login failed!',
        loading: false
      })
    } else {
      dispatch({
        type: 'ON_LOGIN',
        payload: response.data,
        loading: false
      })
    }
  } catch (error) {
    dispatch({
      type: 'ON_ERROR',
      payload: error,
      loading: false
    })
  }
}

// https://netflix-example.herokuapp.com/user/mock-login

// {
//   "email": "test@test.com",
//   "password": "1234567"
// }
