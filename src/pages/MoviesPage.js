import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/Movies/MoviesList';
import api from '../services/api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchQuery = searchParams.get('query');
  const location = useLocation();
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    api
      .getSearchedMovie(searchQuery)
      .then(res => {
        if (!res.length) {
          Notify.info(`Sorry, there is no movie with title ${searchQuery}`);
          return;
        }
        setMovies(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchQuery]);

  const handleFormSubmit = query => {
    setSearchParams({ query: query.trim() });
    setMovies([]);
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && <MoviesList movies={movies} link={''} location={location} />}
    </>
  );
};
export default MoviesPage;
