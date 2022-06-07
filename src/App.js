/* eslint-disable */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      {/* <Route>
        <div>Error 404, Page Not Found</div>
      </Route> */}
    </switch>
  );
}

export default App;
