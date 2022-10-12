import React from 'react'
import { Provider } from 'react-redux';
import App from './App';
import generateStore from '../redux';

const Global = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default Global