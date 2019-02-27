/**
 * Module dependencies.
 */

import * as fromMovies from './reducers/movies';
import get from 'lodash/get';

/**
 * Export `getMovieLoadingStatus`.
 */

export const getMovieLoadingStatus = (state) => {
  return fromMovies.getLoadingStatus(state.movies);
};

/**
 * Export `getMovieResults`.
 */

export const getMovieResults = (state) => {
  const movies = state.entities.movies;

  return fromMovies.getResults(state.movies).map(id => movies[id]);
};

export const getMovieSearchResultIds = (state) => {
  return fromMovies.getSearchResults(state.movies)
};

/**
 * Export `getMovieResults`.
 */

export const getMovieSearchResults = (state) => {
  const movies = state.entities.movies;

  return getMovieSearchResultIds(state).map(id => movies[id]);
};

export const getMovie = (state, id) => {
  return get(state, ['entities', 'movies', id]);
}
