/* eslint-disable */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './Components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Navs />
      <switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          {' '}
          <div>Error 404, Page Not Found</div>
        </Route>
      </switch>
    </div>
  );
}

export default App;
