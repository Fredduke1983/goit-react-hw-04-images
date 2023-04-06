import { useState } from 'react';
import { Container } from './app.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getSearchValue = searchValue => {
    return setSearchValue(searchValue);
  };

  const onMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Container>
        <SearchBar
          getSearchValue={getSearchValue}
          isLoading={isLoading}
          setPage={setPage}
        />
        <ImageGallery
          searchValue={searchValue}
          setLoadState={setIsLoading}
          onMore={onMore}
          page={page}
        />
      </Container>
    </>
  );
}
