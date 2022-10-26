import React from 'react';
import propTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends React.Component {
  state = {
    text: '',
  };
  handleInput = evt => {
    const { value } = evt.target;
    this.setState({ text: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const { text } = this.state;
    this.props.onSubmit(text);
  };
  render() {
    return (
      <header className={css.header}>
        <h1 className={css.title}>
          <a className={css.link} href="./">
            Welcome to Maxis Gallery!
          </a>
        </h1>
        <form onSubmit={this.handleSubmit} className={css.form} action="">
          <label>
            <input
              onChange={this.handleInput}
              className={css.input}
              type="text"
              name="text"
              value={this.state.text}
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
  }
}
Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
