/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowerRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/Base/App';

import store from './redux/store';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
