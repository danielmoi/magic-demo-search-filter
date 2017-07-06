import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import RSF from '../Magic/RSF';

const App = () => (
  <BrowserRouter>
    <div className="app__wrapper">
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/RSF" component={RSF} />


      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
