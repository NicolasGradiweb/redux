import { types } from "../types/user"

const INIT_STATE = {
  users: []
}

export const usersReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case types.GET_USERS:
      return { ...state }
    case types.SET_USERS:
    case types.GET_ORIGINAL_USERS:
      return { ...state, users: action.payload }
    default:
      return state  
  }
}
