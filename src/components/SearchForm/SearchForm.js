import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './SearchForm.module.css';

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.length === 0) {
      Notify.info('Please enter name of movie...🥺');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  return (
    <form onSubmit={handleSubmit} className={css.search__form}>
      <button type="submit" className={css.search__btn}>
        Search
      </button>
      <input
        className={css.search__input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChange}
        value={query}
      />
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
