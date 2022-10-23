import { children } from 'react';
import css from './Button.module.css';

export const Button = ({ children }) => {
  return (
    <button className={css.button} type="button">
      {children}
    </button>
  );
};
