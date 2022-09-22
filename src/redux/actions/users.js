import { types } from "../types/user"

export const getAllUsers = () => (dispatch) => {
  dispatch({
    type: types.GET_USERS
  })
}

export const setUsers = (payload) => (dispatch) => {
  dispatch({
    type: types.SET_USERS,
    payload
  })
}