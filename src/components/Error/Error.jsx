import propTypes from 'prop-types';
import css from './Error.module.css';

export const Error = ({ textError }) => {
  return (
    <div className={css.error}>
      <h2 className={css.title}>Sorry,something went wrong!</h2>
      <p className={css.text}>{textError}</p>
    </div>
  );
};
Error.propTypes = {
  textError: propTypes.string.isRequired,
};
