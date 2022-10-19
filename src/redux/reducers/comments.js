import { types } from "../types/comments"

const INIT_STATE = {
  comments: [],
  loading: false,
  error: ''
}

export const commentsReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case types.GET_POST_COMMENTS:
      return { ...state }

    case types.SET_POST_COMMENTS:
    case types.CLEAN_COMMENTS:
      return { 
        ...state, 
        comments: action.payload ,
        loading: false
      }

    case types.INIT_LOADING_COMMENTS:
      return { ...state, loading: true }

    case types.SET_ERROR_COMMENT:
      return { 
        ...state, 
        error: action.payload, 
        loading: false 
      }

    default:
      return state  
  }
}