/**
* Module dependencies.
*/

import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Movie from './pages/Movie';

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
      <Route
        component={Movie}
        path="/movie/:id"
      />
    </>
  </BrowserRouter>
);

/**
* Export `App` component.
*/

export default App;
