import React from 'react';
import { useState } from 'react';
import propTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleInput = evt => {
    const { value } = evt.target;
    setText(value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(text);
  };

  return (
    <header className={css.header}>
      <h1 className={css.title}>
        <a className={css.link} href="./">
          Welcome to Maxis Gallery!
        </a>
      </h1>
      <form onSubmit={handleSubmit} className={css.form} action="">
        <label>
          <input
            onChange={handleInput}
            className={css.input}
            type="text"
            name="text"
            value={text}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </label>
        <button className={css.searcButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
