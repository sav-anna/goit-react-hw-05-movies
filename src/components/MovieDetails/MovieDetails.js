import PropTypes from 'prop-types';
import css from './MovieDetails.module.css';

const MovieDetails = ({ title, overview, vote_average, genres, poster }) => {
  const genresArr = genres.flatMap(genre => genre.name).join(', ');

  return (
    <div className={css.movieDetails}>
      <img src={poster} alt={title} />
      <ul className={css.movieDetails__part}>
        <li>
          <h2 className={css.movieDetails__heading}>{title}</h2>
          <p className={css.movieDetails__text}>User score: {vote_average}</p>
        </li>
        <li>
          <h3 className={css.movieDetails__title}>Overview</h3>
          <p className={css.movieDetails__text}>{overview}</p>
        </li>
        <li>
          <h3 className={css.movieDetails__title}>Genres</h3>
          <p className={css.movieDetails__text}>{genresArr}</p>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  poster: PropTypes.string.isRequired,
};
