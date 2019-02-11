/**
 * Module dependencies.
 */

import './index.css';
import App from './App';
import createMovies from './utils/search';
import data from './data';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Register the `App` on the `#root` element.
 */

const { list, search } = createMovies(data.results);

ReactDOM.render(
  <App
    movies={list}
    search={search}
  />,
  document.getElementById('root')
);
