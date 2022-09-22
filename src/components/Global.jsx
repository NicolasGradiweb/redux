import React from 'react'
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducers from '../redux/reducers';

const Global = () => {
  const store = createStore(
    reducers,
    {}
  )

  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default Global