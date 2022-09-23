import { types } from "../types/user"

const INIT_STATE = {
  users: [],
  loading: false,
  error: ''
}

export const usersReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case types.GET_USERS:
      return { ...state }

    case types.SET_USERS:
    case types.GET_ORIGINAL_USERS:
      return { 
        ...state, 
        users: action.payload ,
        loading: false
      }

    case types.INIT_LOADING_USERS:
      return { ...state, loading: true }

    case types.SET_ERROR:
      return { 
        ...state, 
        error: action.payload, 
        loading: false 
      }

    default:
      return state  
  }
}
