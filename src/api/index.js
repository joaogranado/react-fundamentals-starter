/**
 * Module dependencies.
 */

import axios from 'axios';
import url from 'url';

const API_KEY = '5bc02a5533a6e124377eac87344a5506';

export const getMovie = (id) => {
  return axios.get(url.format({
    protocol: 'https',
    hostname: 'api.themoviedb.org/3',
    pathname: `/movie/${id}`,
    query: {
      api_key: API_KEY,
    }
  }))

};

export const getMovies = () => {
  return axios.get(url.format({
    protocol: 'https',
    hostname: 'api.themoviedb.org/3',
    pathname: '/discover/movie',
    query: {
      api_key: API_KEY,
      sort_by: 'popularity.desc'
    }
  }))
};

export const searchMovie = (query) => {
  return axios.get(url.format({
    protocol: 'https',
    hostname: 'api.themoviedb.org/3',
    pathname: '/search/movie',
    query: {
      api_key: API_KEY,
      query
    }
  }))
};
