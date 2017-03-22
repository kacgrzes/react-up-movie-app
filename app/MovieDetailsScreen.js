import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

class MovieDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { movie } = this.props.navigation.state.params;

    return <View style={styles.container}>
      <Image source={{uri: `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}}
             style={{width: DEVICE_WIDTH, height: 200}} />
      <View style={styles.textContainer}>
        <Text style={styles.movieTitle}>{movie.original_title}</Text>
        <Text style={styles.movieDescription}>{movie.overview}</Text>
        <Text style={styles.movieReleaseDate}>{movie.release_date}</Text>
        <Text style={styles.movieScore}>{movie.vote_average} from {movie.vote_count} votes</Text>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  textContainer: {
    flex: 1,
    padding: 5
  },
  movieTitle: {
    fontSize: 22
  },
  movieDescription: {
    paddingTop: 8,
    lineHeight: 20
  },
  movieReleaseDate: {
    paddingTop: 8,
    fontSize: 20
  },
  movieScore: {
    paddingTop: 8,
    fontSize: 20
  }
});

export default MovieDetailsScreen;