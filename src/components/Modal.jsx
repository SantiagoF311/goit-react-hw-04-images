import React, { useEffect } from 'react';
import { Overlay, ModalDiv } from './styledComponents/Modal';

const Modal = ({ image, onRequestClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onRequestClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onRequestClose]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      onRequestClose();
    }
  };

  return (
    <Overlay onClick={handleClick}>
      <ModalDiv>
        <img src={image.largeImageURL} alt={image.tags} />
      </ModalDiv>
    </Overlay>
  );
};

export default Modal;