import { useEffect } from 'react';
import { ModalStyle } from './modal.styled';
import { Overlay } from './overlay.styled';

export function Modal({ largeImg, toggleShowModal }) {
  const hideModal = e => {
    if (e.code === 'Escape') {
      toggleShowModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', hideModal);

    return () => {
      window.removeEventListener('keydown', hideModal);
    };
  });

  const onClick = () => {
    toggleShowModal();
  };

  return (
    <Overlay onClick={onClick}>
      <ModalStyle>
        <img src={largeImg} alt="" />
      </ModalStyle>
    </Overlay>
  );
}
