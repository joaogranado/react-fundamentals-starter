/**
* Module dependencies.
*/

import * as actions from '../redux/actions';
import * as selectors from '../redux/selectors';
import { connect } from 'react-redux';
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
  };

  componentDidMount() {
    const { getMovies } = this.props;

    getMovies();
  }

  searchMovie = debounce(() => {
    this.props.searchMovies(this.state.value);
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

    this.props.updateMoviesWithSearchResults(this.props.searchResultsIds);
  }

  render() {
    const { results, searchResults } = this.props;

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

const mapStateToProps = (state) => ({
  results: selectors.getMovieResults(state),
  searchResults: selectors.getMovieSearchResults(state),
  searchResultsIds: selectors.getMovieSearchResultIds(state),
});

const mapDispatchToProps = {
  getMovies: actions.getMovies,
  searchMovies: actions.searchMovies,
  updateMoviesWithSearchResults: actions.updateMoviesWithSearchResults,
}

/**
* Export `Home` component.
*/

export default connect(mapStateToProps, mapDispatchToProps)(Home);
