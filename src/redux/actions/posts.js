import axios from "axios";
import { API } from "../../components/constants/api";
import { types } from "../types/posts";

export const getUserPost = (userId) => async(dispatch, getState) => {
  try {
    const { 
      usersReducer: { users },
      postsReducer: { posts }
    } = await getState();

    const user_id = users[userId - 1]?.id;

    const response = await axios.get(`${API.GET_USER_POST}?userId=${user_id}`);
  
    const { status, data } = response;
    const dataToShow = status === 200 ? [...data] : []

    dispatch({
      type: types.GET_USER_POST,
      payload: {
        ...posts,
        [userId]:dataToShow
      }
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