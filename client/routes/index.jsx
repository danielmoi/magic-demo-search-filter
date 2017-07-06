import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

import App from '../components/Base/App';
import Home from '../components/Base/Home';


module.exports = () => (
  <Route exact path="/" component={App} >
    <Route name="Home" component={Home} />
  </Route>
);
