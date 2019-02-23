import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";

import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => this.setState({ albums: res.data }));
  }

  getAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} record={album} />
    ));
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.getAlbums()}</ScrollView>;
  }
}

export default AlbumList;
