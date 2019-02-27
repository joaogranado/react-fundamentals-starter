/**
 * Module dependencies.
 */
import * as types from '../types';
import { combineReducers } from 'redux';

/**
 * Initial state.
 */

const initialState = {
  isLoading: false,
  results: [],
  searchResults: [],
};

const isLoading = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case types.GET_MOVIES_REQUEST:
    case types.SEARCH_MOVIES_REQUEST:
      return true;
    case types.GET_MOVIES_SUCCESS:
    case types.SEARCH_MOVIES_SUCCESS:
      return false;
    default:
      return state;
  }
}

const results = (state = initialState.results, action) => {
  switch (action.type) {
    case types.GET_MOVIES_SUCCESS:
      return action.payload.result;
    case types.UPDATE_MOVIES_WITH_SEARCH:
      return [...action.payload.results];
    default:
      return state;
  }
}

const searchResults = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case types.SEARCH_MOVIES_SUCCESS:
      return action.payload.result;
    case types.RESET_SEARCH_RESULTS:
      return initialState.searchResults;
    default:
      return state;
  }
};

export const getLoadingStatus = (state) => state.isLoading;
export const getResults = (state) => state.results;
export const getSearchResults = (state) => state.searchResults;

/**
 * Export `movies` reducer.
 */

export default combineReducers({
  isLoading,
  results,
  searchResults
});
