/**
 * Module dependencies.
 */

import Trie from './Trie';

/**
 * Export `createMovies`.
 */

export default (movies) => {
  const trie = new Trie();

  for (const movie of movies) {
    trie.insert(movie.title.toLowerCase());
  }

  return {
    list: movies,
    search: (input) => {
      if (!input) {
        return [];
      }

      return trie
        .find(input.toLowerCase())
        .map(title => movies.find(movie => movie.title.toLowerCase() === title))
      }
  };
};
