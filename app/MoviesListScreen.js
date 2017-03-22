import React from 'react';
import { ListView } from 'react-native';
import MovieItem from './MovieItem';

class MoviesListScreen extends React.Component {
  static navigationOptions = {
    title: 'Top movies',
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=83687da2c34afd61786a6d27eae76acb')
      .then(response => response.json())
      .then(data => {

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data.results)
        });
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={rowData =>
        <MovieItem {...rowData} onPress={() => navigate('MovieDetails', {movie: rowData})}/>
      }
    />
  }
}

export default MoviesListScreen;