import { userDetailsAction, IUserDetails } from '../constants/userConstants'
import axios from 'axios'
import { RootState } from '../store'
import { Dispatch } from 'react'

export const getUserDetails = (id: string) => async (dispatch: Dispatch<userDetailsAction>, getState) => {
  try {
    dispatch({
      type: 'USER_DETAILS_REQUEST',
      payload: {}
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users/${id}`, config)

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}


//https://reqres.in/api/users/2