import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import App from './app';
import { configureStore } from '../../store/store';

const store = configureStore();

const Root = () => (
  <Provider store={ store }>
    <BrowserRouter basename='/'>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
