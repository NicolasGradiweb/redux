import axios from "axios";
import { API } from "../../components/constants/api";
import { types } from "../types/posts";

export const getUserPost = (userId) => async(dispatch) => {
  try {
    const response = await axios.get(API.GET_USER_POST);
  
    const { status, data } = response;
  
    const allPosts = status === 200 ? [...data] : []

    const filteredPosts = allPosts.filter(post => post.userId === parseInt(userId));

    dispatch({
      type: types.GET_USER_POST,
      payload: filteredPosts
    })
  } catch (error) {
    dispatch({
      type: types.SET_ERROR_POST,
      payload: error.message
    })
  }
}

export const initLoadingPosts = () => (dispatch) => {
  dispatch({
    type: types.INIT_LOADING_POST
  })
}