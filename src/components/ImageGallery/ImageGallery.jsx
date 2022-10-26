import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <ImageGalleryItem
          id={image.id}
          src={image.webformatURL}
          alt={image.tags}
          key={image.id}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: propTypes.arrayOf(propTypes.object),
  onClick: propTypes.func.isRequired,
};
