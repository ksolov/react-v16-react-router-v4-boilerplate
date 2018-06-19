import React from 'react';
import { hot } from 'react-hot-loader';
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

export default hot(module)(Root);
