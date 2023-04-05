import { getFetchPixabay } from 'components/GetFetchPixabay/getFetchPixabay';
import { Component } from 'react';
import { Gallery, LoadMore } from './imageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class ImageGallery extends Component {
  state = {
    dataPics: [],
    page: 1,
    isEmptyList: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, setLoadState } = this.props;
    const { page, dataPics } = this.state;

    if (page !== prevState.page) {
      setLoadState(true);
      getFetchPixabay(searchValue, page)
        .then(response => {
          if (response.data.hits.length === 0) {
            this.setState({ isEmptyList: false });
            return toast('No more picture');
          }
          this.setState({
            dataPics: [...dataPics, ...response.data.hits],
            isEmptyList: true,
          });
        })
        .finally(
          setTimeout(() => {
            return this.props.setLoadState(false);
          }, 1000)
        );
    }

    if (searchValue !== prevProps.searchValue && searchValue) {
      setLoadState(true);

      if (prevState.page !== 1) {
        this.setState({ page: 1 });
      }

      getFetchPixabay(searchValue)
        .then(response => {
          if (response.data.hits.length === 0) {
            return toast('Picture not find');
          }
          this.setState({
            dataPics: response.data.hits,
            isEmptyList: true,
          });
        })
        .finally(
          setTimeout(() => {
            return setLoadState(false);
          }, 1000)
        );
    }
  }

  onMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { dataPics, isEmptyList } = this.state;
    return (
      <>
        <Gallery>
          {dataPics.length !== 0 && (
            <ImageGalleryItem
              dataPics={dataPics}
              setLargeImg={this.props.setLargeImg}
              setShowModal={this.props.setShowModal}
            />
          )}
        </Gallery>
        {isEmptyList && <LoadMore onClick={this.onMore}>Load More...</LoadMore>}
        <ToastContainer />
      </>
    );
  }
}
