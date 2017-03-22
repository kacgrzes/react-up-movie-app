import React, {Component} from 'react';

import { StackNavigator } from 'react-navigation';
import MoviesListScreen from './app/MoviesListScreen';
import MovieDetailsScreen from './app/MovieDetailsScreen';

const App = StackNavigator({
  Home: { screen: MoviesListScreen },
  MovieDetails: { screen: MovieDetailsScreen}
});

export default App;