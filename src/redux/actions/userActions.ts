import axios from 'axios'
import { Dispatch } from 'react'
import { UserLoginModel, UserLoginAction } from '../types/userTypes'
import { UserLoginState } from '../reducers/userReducers'

export const login = (email: string, password: string) => async (dispatch: Dispatch<UserLoginAction>, getState: () => UserLoginState) => {
  try {
    dispatch({
      type: 'USER_LOGIN_REQUEST',
      loading: true,
      payload: {} as UserLoginModel,
    })

    const { user } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        // Authorization: `Bearer ${user.token}`,
      },
    }

    const response = await axios.post<UserLoginModel>(
      'https://netflix-example.herokuapp.com/user/mock-login',
      {
        email,
        password,
      },
      config
    )

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      loading: false,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_ERROR',
      loading: false,
      payload: error,
    })
  }
}
