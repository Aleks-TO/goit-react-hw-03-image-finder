import { Component } from 'react';
import Searchbar from './searchbar/searchbar';
import { fetchPictures, perPage } from 'API/api';

export class App extends Component {
  state = {
    pictures: [],
    page: 1,
  };

  render() {
    return (
      <>
        <Searchbar />
      </>
    );
  }
}
