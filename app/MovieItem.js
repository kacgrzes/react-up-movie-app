import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const MovieItem = ({title, poster_path, vote_average, onPress}) =>
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: `https://image.tmdb.org/t/p/w92/${poster_path}`}}
               style={{width: 50, height: 50}} />
      </View>
      <View style={styles.textContainer}>
        <Text>{title}</Text>
        <Text>Score: {vote_average}</Text>
      </View>
    </View>
  </TouchableOpacity>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  imageContainer: {
    flexGrow: 0,
    paddingRight: 5
  },
  textContainer: {
    flex: 1
  }
});

export default MovieItem;