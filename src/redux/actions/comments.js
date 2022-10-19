import axios from "axios";
import { API } from "../../components/constants/api";
import { types } from "../types/comments";

export const setPostComments = (postId) => async(dispatch) => {
  try {
    const response = await axios.get(`${API.GET_POST_COMMENTS}${postId}`);
  
    const { status, data } = response;

    dispatch({
      type: types.SET_POST_COMMENTS,
      payload: status === 200 ? [...data] : []
    })
  } catch (error) {
    dispatch({
      type: types.SET_ERROR_COMMENT,
      payload: error.message
    })
  }
}

export const initLoadingComments = () => (dispatch) => {
  dispatch({
    type: types.INIT_LOADING_COMMENTS
  })
}

export const cleanComments = () => (dispatch) => {
  dispatch({
    type: types.CLEAN_COMMENTS,
    payload: []
  })
}