/**
 * Module dependencies.
 */

import './index.css';
import App from './App';
import data from './data';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Register the `App` on the `#root` element.
 */

ReactDOM.render(<App movies={data.results} />, document.getElementById('root'));
