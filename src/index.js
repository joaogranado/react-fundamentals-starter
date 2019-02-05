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

ReactDOM.render(<App data={data} />, document.getElementById('root'));
