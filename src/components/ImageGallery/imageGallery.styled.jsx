import styled from '@emotion/styled';

const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
`;

const GalleryItems = styled.li`
  scale: 1;
  transition: transform 300ms;
  cursor: pointer;
  img {
    border-radius: 5px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const LoadMore = styled.button`
  display: inline-block;
  width: 100px;
  height: 40px;
  margin: 0 auto;
  padding: 8px 16px;

  cursor: pointer;
  border: none;
  border-radius: 5px;

  background-color: #3f51b5;
  color: #fff;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:hover {
    background-color: #303f9f;
  }
`;

export { Gallery, GalleryItems, LoadMore };
