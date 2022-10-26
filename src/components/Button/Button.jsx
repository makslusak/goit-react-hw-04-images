import propTypes from 'prop-types';
import { children } from 'react';
import css from './Button.module.css';

export const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={css.button} type="button">
      {text}
    </button>
  );
};
Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
