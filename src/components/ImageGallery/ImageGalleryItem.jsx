import React from 'react';
import { GalleryItems } from './imageGallery.styled';

export function ImageGalleryItem(props) {
  const onClick = e => {
    const largeImg = props.dataPics.find(el => {
      return e.target.src === el.webformatURL;
    }).largeImageURL;
    props.setLargeImg(largeImg);
    props.setShowModal();
  };

  return props.dataPics.map(img => {
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
  });
}
