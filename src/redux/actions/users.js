import axios from "axios";
import { types } from "../types/user"

export const getOriginalUsers = () => async(dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');

  const { status, data } = response;

  dispatch({
    type: types.GET_ORIGINAL_USERS,
    payload: status === 200 ? [...data] : []
  })
}

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