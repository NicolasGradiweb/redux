import { combineReducers } from "redux";
import { usersReducer } from "./reducers/users";
import { postsReducer } from "./reducers/posts";

export default combineReducers({
  usersReducer,
  postsReducer
});
