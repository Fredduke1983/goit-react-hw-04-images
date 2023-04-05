import { useState } from 'react';
import { Container } from './app.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState(null);

  const getSearchValue = searchValue => {
    return setSearchValue(searchValue);
  };

  const toggleShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
      <Container>
        <SearchBar getSearchValue={getSearchValue} isLoading={isLoading} />
        <ImageGallery
          searchValue={searchValue}
          setLoadState={setIsLoading}
          setLargeImg={setLargeImg}
          setShowModal={toggleShowModal}
        />
      </Container>
      {isShowModal && (
        <Modal setShowModal={toggleShowModal} largeImg={largeImg} />
      )}
    </>
  );
}
