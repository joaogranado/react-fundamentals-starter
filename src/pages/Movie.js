/**
 * Module dependencies.
 */

import './Movie.css';
import { withRouter } from 'react-router';
import { getMovie } from '../api';
import Container from '../components/Container';
import React from 'react';

/**
 * `Movie` component.
 */

class Movie extends React.Component {
  state = {
    movie: null
  };

  async componentDidMount() {
    const { data } = await getMovie(this.props.match.params.id);

    this.setState({
      movie: data
    });
  }

  render() {
    const { movie } = this.state;

    if (!movie) {
      return null;
    }

    return (
      <Container>
          <div className="movie-banner-wrapper">
            <div className="movie-banner">
              <div className="movie-details-wrapper">
                <div>
                  <img
                    alt={movie.title}
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                  />
                </div>

                <div className="movie-details">
                  <h1 className="movie-title">{movie.title}</h1>
                </div>
              </div>
            </div>

            <img
              alt={movie.title}
              className="movie-backdrop-bg"
              src={`https://image.tmdb.org/t/p/w1400_and_h450_face${movie.backdrop_path}`}
            />
          </div>
        </Container>
    );
  }
}

export default withRouter(Movie);
