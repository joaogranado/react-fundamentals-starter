/**
 * Module dependencies.
 */

import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

/**
* `App` component.
*/

const App = () => (
  <BrowserRouter>
    <>
      <Route
        component={Home}
        exact
        path="/"
      />
    </>
  </BrowserRouter>
);

/**
* Export `App` component.
*/

export default App;
