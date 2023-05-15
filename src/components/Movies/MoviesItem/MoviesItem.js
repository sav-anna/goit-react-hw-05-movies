import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MoviesItem.module.css';

const MoviesItem = ({ id, title, link, location }) => {
  return (
    <li className={css.movieItem} key={id}>
      <Link to={link} state={{ from: location }} className={css.link}>
        <p>{title}</p>
      </Link>
    </li>
  );
};
export default MoviesItem;

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.string),
};
