import propTypes from 'prop-types';
import React from 'react';
import css from './Modal.module.css';

export class Modal extends React.Component {
  state = {
    isModalOpen: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  }

  handleModalClose = evt => {
    const { isModalOpen } = this.state;
    if (evt.code === 'Escape' || evt.target === evt.currentTarget) {
      this.props.onModalClose(isModalOpen);
    }
  };
  render() {
    const { isActiveImage, images } = this.props;
    const activeImage = images?.find(image => image.id === isActiveImage);
    return (
      <div onClick={this.handleModalClose} className={css.backdrop}>
        <div className={css.modal}>
          <img
            className={css.image}
            src={activeImage.largeImageURL}
            alt="large sithe image"
          />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  isActiveImage: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.object),
  onModalClose: propTypes.func.isRequired,
};
