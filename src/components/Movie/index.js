/**
 * Module dependencies.
 */

import './Movie.css';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Movie component.
 */

const Movie = (props) => (
    <div className="movie">
        <div className="movie-image-container">
            <img
                alt={props.title}
                className="movie-poster-sm"
                src={props.posterUrl}
            />
            <img
                alt={props.title}
                className="movie-backdrop"
                src={props.backdropUrl}
            />
        </div>
    </div>
);

/**
 * Props validation.
 */

Movie.propTypes = {
    backdropUrl: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

/**
 * Export `Movie`.
 */

export default Movie;
