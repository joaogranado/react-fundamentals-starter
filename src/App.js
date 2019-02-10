/**
* Module dependencies.
*/

import Container from './components/Container';
import Grid from './components/Grid';
import Logo from './components/Logo';
import Main from './components/Main';
import Movie from './components/Movie';
import Nav from './components/Nav';
import React from 'react';

/**
* `App` component.
*/

class App extends React.Component {
  render() {
    return (
      <Main>
        <Nav>
          <Logo />
        </Nav>

        <Container>
          <Grid items={this.props.movies}>
            {(movie) => (
              <Movie
                key={movie.id}
                backdropUrl={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
                posterUrl={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                title={movie.title}
              />
            )}
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
