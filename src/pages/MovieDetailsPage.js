import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import api from '../services/api';
import MovieDetails from '../components/MovieDetails';
import Loader from '../components/Loader';
import css from './MovieDetails.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api
      .getMovieDetails(movieId)
      .then(response => {
        setMovie(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      <Link to={backLinkRef.current} className={css.link}>
        Go back
      </Link>
      {movie && <MovieDetails {...movie} />}
      <div>
        <h3 className={css.title}>Additional information</h3>
        <div className={css.information}>
          <Link to="cast" className={css.infoDetails}>
            Cast
          </Link>

          <Link to="reviews" className={css.infoDetails}>
            Reviews
          </Link>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
