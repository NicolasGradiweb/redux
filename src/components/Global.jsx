import React from 'react'
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducers from '../redux';
import reduxThunk from 'redux-thunk'

const Global = () => {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
  )

  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default Global