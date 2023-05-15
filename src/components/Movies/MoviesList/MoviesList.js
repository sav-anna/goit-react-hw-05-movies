import PropTypes from 'prop-types';
import MoviesItem from '../MoviesItem';
import css from './MoviesList.module.css';

const MoviesList = ({ movies, link, location }) => {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        {movies.map(movie => {
          return (
            <MoviesItem
              {...movie}
              key={movie.id}
              link={`${link}${movie.id}`}
              location={location}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired))
    .isRequired,
  link: PropTypes.string.isRequired,
};
