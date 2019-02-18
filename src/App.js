/**
* Module dependencies.
*/

import debounce from 'lodash/debounce';
import axios from 'axios';
import Container from './components/Container';
import Grid from './components/Grid';
import Logo from './components/Logo';
import Main from './components/Main';
import Movie from './components/Movie';
import Nav from './components/Nav';
import React from 'react';
import SearchInput, { SearchInputItem } from './components/SearchInput';
import url from 'url';

const API_KEY = '5bc02a5533a6e124377eac87344a5506';

const getMovies = () => {
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

const searchMovie = (query) => {
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

/**
* `App` component.
*/

class App extends React.Component {
  state = {
    value: '',
    results: [],
    searchResults: []
  };

  async componentDidMount() {
    const { data } = await getMovies();

    this.setState({ results: data.results });
  }

  searchMovie = debounce(async () => {
    if (this.state.value.length <= 3) {
      return this.setState(state =>
        state.searchResults.length ? { searchResults: [] } : null
      );
    }

    const { data } = await searchMovie(this.state.value);

    this.setState({ searchResults: data.results });
  }, 300);

  handleChange = (event) => {
    const query = event.target.value;

    this.setState({
      value: query
    }, () => {
      this.searchMovie();
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.searchResults.length) {
      return;
    }

    this.setState((state) => ({
      results: state.searchResults
    }));
  }

  render() {
    const { results, searchResults } = this.state;

    return (
      <Main>
        <Nav>
          <Logo />
        </Nav>

        <Container>
          <form
            className="form"
            onSubmit={this.handleSubmit}
          >
            <SearchInput
              autoComplete="off"
              name="search"
              placeholder="Search..."
              onChange={this.handleChange}
            >
              {searchResults.length > 0 && searchResults.map((movie) => (
                <SearchInputItem key={movie.id} >{movie.title}</SearchInputItem>
              ))}
            </SearchInput>
          </form>
          <Grid>
            {results.map((movie) => (
              <Movie
                backdropUrl={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`}
                key={movie.id}
                posterUrl={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                title={movie.title}
              />
            ))
            }
          </Grid>
        </Container>
      </Main>
    );
  }
}


/**
* Export `App` component.
*/

export default App;
