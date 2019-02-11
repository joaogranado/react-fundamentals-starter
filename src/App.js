/**
* Module dependencies.
*/

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
    results: []
  };

  handleChange = (event) => {
    this.setState({
      results: this.props.search(event.target.value)
    });
  }

  render() {
    const { movies } = this.props;
    const { results } = this.state;

    return (
      <Main>
        <Nav>
          <Logo />
        </Nav>

        <Container>
          <SearchInput
            name="search"
            placeholder="Search..."
            onChange={this.handleChange}
          >
            {results.length > 0 && results.map((movie) => (
              <SearchInputItem key={movie.id} >{movie.title}</SearchInputItem>
            ))}
          </SearchInput>

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
