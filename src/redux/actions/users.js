import axios from "axios";
import { types } from "../types/user"

export const getOriginalUsers = () => async(dispatch) => {
  try {
    const API = 'https://jsonplaceholder.typicode.com/usersk';
    const response = await axios.get(API);
  
    const { status, data } = response;
  
    dispatch({
      type: types.GET_ORIGINAL_USERS,
      payload: status === 200 ? [...data] : []
    })
  } catch (error) {
    dispatch({
      type: types.SET_ERROR,
      payload: error.message
    })
  }
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

export const initLoadingUsers = () => (dispatch) => {
  dispatch({
    type: types.INIT_LOADING_USERS
  })
}

export const stopLoadingUsers = () => (dispatch) => {
  dispatch({
    type: types.STOP_LOADING_USERS
  })
}