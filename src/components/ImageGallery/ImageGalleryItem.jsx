import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItems } from './imageGallery.styled';
import { Modal } from 'components/Modal/Modal';

export function ImageGalleryItem({ dataPics }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState(null);

  const toggleShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  const onClick = e => {
    const largeImg = dataPics.find(el => {
      return e.target.src === el.webformatURL;
    }).largeImageURL;
    setLargeImg(largeImg);
    toggleShowModal();
  };

  return (
    <>
      {dataPics.map(img => {
        return (
          <GalleryItems key={img.id}>
            <img
              src={img.webformatURL}
              alt={img.tags}
              width="270px"
              height="200px"
              onClick={onClick}
            />
          </GalleryItems>
        );
      })}
      {isShowModal && (
        <Modal largeImg={largeImg} toggleShowModal={toggleShowModal} />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  dataPics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      previewURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ).isRequired,
};
