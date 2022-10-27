import propTypes from 'prop-types';
import React from 'react';
import { useState, useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ images, onModalClose, isActiveImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = evt => {
    if (evt.code === 'Escape' || evt.target === evt.currentTarget) {
      onModalClose(isModalOpen);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleModalClose);
    return () => window.removeEventListener('keydown', handleModalClose);
  }, []);

  const activeImage = images?.find(image => {
    return image.id === Number(isActiveImage);
  });

  return (
    <div onClick={handleModalClose} className={css.backdrop}>
      <div className={css.modal}>
        <img
          className={css.image}
          src={activeImage.largeImageURL}
          alt="large size"
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isActiveImage: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.object),
  onModalClose: propTypes.func.isRequired,
};
