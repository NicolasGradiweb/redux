import { types } from "../types/posts"

const INIT_STATE = {
  posts: [],
  loading: false,
  error: ''
}

export const postsReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case types.GET_USER_POST:
      return { 
        ...state, 
        posts: action.payload,
        loading: false
      }

    case types.INIT_LOADING_POST:
      return { ...state, loading: true }

    case types.SET_ERROR_POST:
      return { 
        ...state, 
        error: action.payload, 
        loading: false 
      }

    default:
      return state  
  }
}