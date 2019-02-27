/**
* Module dependencies.
*/

import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Movie from './pages/Movie';
import createStore from './redux';

/**
* `App` component.
*/
const store = createStore();

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

/**
* Export `App` component.
*/

export default App;
