import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';

// Redux dev tools.
// See more: https://github.com/zalmoxisus/redux-devtools-extension
function getDevTools() {
  return process.env.NODE_ENV !== 'production' && (typeof window === 'object') && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f;
}

export function configureStore(initialState = {}) {
  let middlewares = [thunk];

  let enhanser = compose(
    applyMiddleware(...middlewares),
    getDevTools()
  );

  const store = createStore(
    reducers,
    initialState,
    enhanser
  );

  if (module.hot) {
    enhanser;
    module.hot.accept('../reducers/reducers', () => {
      const nextRootReducer = require('../reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
