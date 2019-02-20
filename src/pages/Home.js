/**
* Module dependencies.
*/

import { getMovies, searchMovie } from '../api';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import debounce from 'lodash/debounce';
import Grid from '../components/Grid';
import Logo from '../components/Logo';
import Main from '../components/Main';
import Movie from '../components/Movie';
import Nav from '../components/Nav';
import React from 'react';
import SearchInput, { SearchInputItem } from '../components/SearchInput';

/**
* `Home` component.
*/

class Home extends React.Component {
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
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
              >
                <Movie
                  backdropUrl={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`}
                  posterUrl={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  title={movie.title}
                />
              </Link>
            ))
            }
          </Grid>
        </Container>
      </Main>
    );
  }
}


/**
* Export `Home` component.
*/

export default Home;
