const INIT_STATE = {
  users: []
}

export const usersReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case 'get_users':
      return { ...state, users: action.payload }
    default:
      return state  
  }
}
