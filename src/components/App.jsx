import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar';
import { fetchPictures, perPage } from 'API/api';
import ImageGallery from './imageGallery/imageGallery';
import Loader from './loader/loader';
import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    name: '',
    isEmpty: true,
    isVisible: false,
    error: null,
    isLoading: false,
    showModal: false,
    selectedImage: null,
  };

  componentDidUpdate(_, prevState) {
    const { name, page } = this.state;
    if (prevState.name !== name || prevState.page !== page) {
      this.getPicture(name, page);
    }
  }

  render() {
    const { images, isEmpty, isVisible, error, isLoading } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        {isEmpty && <p className={css.text}>Sorry, there are no images...</p>}
        {error && <p className={css.text}>Sorry, {error}</p>}
        <ImageGallery images={images} />
        {/* {isVisible &&
          (isLoading ? <Loader /> : <Button onClick={this.onLoadMore} />)} */}
      </div>
    );
  }
}
