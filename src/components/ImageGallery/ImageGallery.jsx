import { getFetchPixabay } from 'components/GetFetchPixabay/getFetchPixabay';
import { useState, useEffect } from 'react';
import { Gallery, LoadMore } from './imageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ImageGallery({ searchValue, setLoadState, onMore, page }) {
  const [dataPics, setDataPics] = useState([]);
  const [isEmptyList, setIsEmptyList] = useState(false);

  useEffect(() => {
    if (!searchValue) return;

    setLoadState(true);

    getFetchPixabay(searchValue, page)
      .then(response => {
        if (response.data.hits.length !== 0 && page === 1) {
          setIsEmptyList(true);
          return setDataPics(() => [...response.data.hits]);
        } else if (response.data.hits.length !== 0 && page > 1) {
          return setDataPics(prev => [...prev, ...response.data.hits]);
        } else if (response.data.hits.length === 0 && page > 1) {
          setIsEmptyList(false);
          return toast('No more picture');
        } else if (response.data.hits.length === 0 && page === 1) {
          setIsEmptyList(false);
          return toast('Picture not find');
        }
      })
      .then(
        setTimeout(() => {
          return setLoadState(false);
        }, 1000)
      );
  }, [searchValue, page, setLoadState]);

  return (
    <>
      <Gallery>
        {dataPics.length !== 0 && <ImageGalleryItem dataPics={dataPics} />}
      </Gallery>
      {isEmptyList && <LoadMore onClick={onMore}>Load More...</LoadMore>}
      <ToastContainer />
    </>
  );
}
