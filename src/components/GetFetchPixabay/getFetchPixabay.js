import axios from 'axios';
const KEY = '33584211-0b8ad53b88131ae018d3e6558';
const BASIC_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

export async function getFetchPixabay(searchValue, page = 1) {
  return await axios.get(
    `${BASIC_URL}?q=${searchValue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
}
