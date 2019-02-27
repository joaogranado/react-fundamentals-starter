/**
 * Module dependencies.
 */

import { normalize } from 'normalizr';
import * as selectors from './selectors';
import * as sdk from '../api';
import * as types from './types';
import * as schema from './schema';

export const getMovies = () => async (dispatch) => {
  dispatch({ type: types.GET_MOVIES_REQUEST });

  const { data } = await sdk.getMovies();

  dispatch({
    type: types.GET_MOVIES_SUCCESS,
    payload: normalize(data.results, [schema.movie]),
  });
}

export const getMovie = (id) => async (dispatch) => {
  dispatch({ type: types.GET_MOVIE_REQUEST });

  const { data } = await sdk.getMovie(id);

  dispatch({
    type: types.GET_MOVIE_SUCCESS,
    payload: normalize(data, schema.movie),
  });
}

export const searchMovies = (query) => async (dispatch, getState) => {
  if (query.length < 3) {
    return dispatch({ type: types.RESET_SEARCH_RESULTS })
  }

  if (selectors.getMovieLoadingStatus(getState())) {
    return Promise.resolve();
  }

  dispatch({ type: types.SEARCH_MOVIES_REQUEST });

  const { data } = await sdk.searchMovies(query);

  dispatch({
    type: types.SEARCH_MOVIES_SUCCESS,
    payload: normalize(data.results, [schema.movie]),
  });
}

export const updateMoviesWithSearchResults = (results) => ({
  type: types.UPDATE_MOVIES_WITH_SEARCH,
  payload: { results }
});
