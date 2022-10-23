import css from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Welcome to Maxis Gallery!</h1>
      <form className={css.form} action="">
        <label>
          <input className={css.input} type="text" />
        </label>
        <button className={css.searcButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
