import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers';

let storeWithMiddleware;

const reduxRouterMiddleware = routerMiddleware(browserHistory);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
  // Transform Immutable objects into JSON
    stateTransformer: (state) => {
      const newState = {};

      for (const i of Object.keys(state)) {
        if (Immutable.Iterable.isIterable(state[i])) {
          newState[i] = state[i].toJS();
        } else {
          newState[i] = state[i];
        }
      }

      return newState;
    },
  });

  storeWithMiddleware = compose(
    applyMiddleware(thunk, logger, reduxRouterMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);
} else {
  storeWithMiddleware = compose(
    applyMiddleware(thunk, reduxRouterMiddleware),
  )(createStore);
}

const store = storeWithMiddleware(rootReducer, {});

export default store;
