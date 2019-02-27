/**
 * Module dependencies.
 */

import './Movie.css';
import * as actions from '../redux/actions';
import * as selectors from '../redux/selectors';
import { compose } from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Container from '../components/Container';
import React from 'react';

/**
 * `Movie` component.
 */

class Movie extends React.Component {
  async componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    const { movie } = this.props;

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

const mapStateToProps = (state, props) => ({
  movie: selectors.getMovie(state, props.match.params.id)
});

const mapDispatchToProps = {
  getMovie: actions.getMovie
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Movie);
