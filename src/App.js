/* eslint-disable */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <switch>
      <Route exact path="/">
        This is home Page
      </Route>

      <Route exact path="/starred">
        This is Starred Page
      </Route>

      <Route> Error 404, Page Not Found</Route>
    </switch>
  );
}

export default App;
