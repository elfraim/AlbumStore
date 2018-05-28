import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };
	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then(responce => responce.json()) //Converts data to json
		.then(myJson => { //Uses the json  data to update state
			this.setState({
				albums: myJson
			});
		});
	}

	renderAlbums() {
		return this.state.albums.map(album =>
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		console.log(this.state);
    return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
    );
  }
}


export default AlbumList;
