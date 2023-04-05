import { Component } from 'react';
import { Container } from './app.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchValue: '',
    isLoading: false,
    isShowModal: false,
    largeImg: null,
  };

  getSearchValue = searchValue => {
    return this.setState({ searchValue });
  };

  setLoadState = isLoading => {
    this.setState({ isLoading });
  };

  setShowModal = () => {
    this.setState({ isShowModal: !this.state.isShowModal });
  };

  setLargeImg = largeImg => {
    this.setState({ largeImg });
  };

  render() {
    return (
      <>
        <Container>
          <SearchBar
            getSearchValue={this.getSearchValue}
            isLoading={this.state.isLoading}
          />
          <ImageGallery
            searchValue={this.state.searchValue}
            setLoadState={this.setLoadState}
            setLargeImg={this.setLargeImg}
            setShowModal={this.setShowModal}
          />
        </Container>
        {this.state.isShowModal && (
          <Modal
            setShowModal={this.setShowModal}
            largeImg={this.state.largeImg}
          />
        )}
      </>
    );
  }
}
