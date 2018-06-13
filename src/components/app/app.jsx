import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Main from '../../containers/Pages/Main/Main';
import Team from '../../containers/Pages/Team';
import Play from '../../containers/Pages/Play/Play';
import PlayResults from '../../containers/Pages/PlayResults/PlayResults';
import '../../styles/index.css';
import './app.css';

import cn from '../../utils/cn';

@cn('app')
class App extends React.Component {
  render(cn) {
    return (
      <div className={ cn() } >
        <ul>
          <li><Link to={routes.index}>Main</Link></li>
          <li><Link to={routes.team}>Team</Link></li>
          <li><Link to={routes.play}>Play</Link></li>
          <li><Link to={routes.result}>PlayResults</Link></li>
        </ul>
        <br/>
        <br/>
        <br/><br/>

        <Switch>
          <Route
            exact={ true }
            path={ routes.index }
            component={ Main }
          />
          <Route
            exact={ true }
            path={ routes.team }
            component={Team}
          />
          <Route
            exact={ true }
            path={ routes.play }
            component={Play}
          />
          <Route
            exact={ true }
            path={ routes.result }
            component={PlayResults}
          />
          <Route
            path='*'
            render={() => <Redirect to={routes.index} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
