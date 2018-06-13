import React from 'react';
import { hot } from 'react-hot-loader';

import Routes from '../../components/app/Routes';
import Header from '../../components/Header';
import '../../styles/index.css';
import './app.css';

import cn from '../../utils/cn';

@cn('app')
class App extends React.Component {
  render(cn) {
    return (
      <div className={ cn() } >
        <Header />

        <Routes />
      </div>
    );
  }
}

export default hot(module)(App);
