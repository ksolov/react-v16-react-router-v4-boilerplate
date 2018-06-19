import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Play from '../../containers/Pages/Play';
import Main from '../../containers/Pages/Main';
import Team from '../../containers/Pages/Team';
import PlayResults from '../../containers/Pages/PlayResults';

const Routes = () => (
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
);

export default Routes;
