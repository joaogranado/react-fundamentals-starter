
/**
 * Module dependencies.
 */

import { combineReducers } from 'redux';
import movies from './movies';
import entities from './entities';

/**
 * Export `reducer`.
 */

export default combineReducers({
  entities,
  movies,
});
