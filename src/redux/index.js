import { applyMiddleware, legacy_createStore as createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { usersReducer } from "./reducers/users";
import { postsReducer } from "./reducers/posts";
import { commentsReducer } from "./reducers/comments";

const rootReducer = combineReducers({
  usersReducer,
  postsReducer,
  commentsReducer
});

//Store data in redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    //Create store constante calling combine reducers
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}