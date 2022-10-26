import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, src, alt, onClick }) => {
  return (
    <li>
      <img
        className={css.image}
        onClick={onClick}
        id={id}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  id: propTypes.number.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
