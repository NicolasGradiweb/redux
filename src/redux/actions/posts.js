import axios from "axios";
import { API } from "../../components/constants/api";
import { types } from "../types/posts";

export const getUserPost = (userId) => async(dispatch) => {
  try {
    const response = await axios.get(`${API.GET_USER_POST}?userId=${userId}`);
  
    const { status, data } = response;

    dispatch({
      type: types.GET_USER_POST,
      payload: status === 200 ? [...data] : []
    })
  } catch (error) {
    dispatch({
      type: types.SET_ERROR_POST,
      payload: error.message
    })
  }
}

export const cleanPosts = () => (dispatch) => {
  dispatch({
    type: types.CLEAN_POST
  })
}

export const initLoadingPosts = () => (dispatch) => {
  dispatch({
    type: types.INIT_LOADING_POST
  })
}