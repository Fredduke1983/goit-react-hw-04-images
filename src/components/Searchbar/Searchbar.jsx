import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarStyle,
  SearchForm,
  SearchInput,
  SubmitBtn,
} from './searchBar.styled';
import { FiSearch } from 'react-icons/fi';
import { Loader } from 'components/Loader/Loader';

export function SearchBar({ getSearchValue, isLoading, setPage }) {
  const [value, setValue] = useState('');

  function resetForm() {
    setValue('');
  }

  const onSubmit = event => {
    event.preventDefault();
    getSearchValue(value);
    resetForm();
    setPage(1);
  };

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <SearchBarStyle>
      {isLoading && <Loader />}
      <SearchForm onSubmit={onSubmit}>
        <SubmitBtn type="submit">
          <span className="button-label">
            <FiSearch />
          </span>
        </SubmitBtn>
        <SearchInput
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={value}
        />
      </SearchForm>
    </SearchBarStyle>
  );
}

SearchBar.propTypes = {
  getSearchValue: PropTypes.func,
  isLoading: PropTypes.bool,
  setPage: PropTypes.func,
};
