import { useState, useEffect } from 'react';
import api from '../services/api';
import MoviesList from '../components/Movies/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api
      .getTrendingMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {movies && <MoviesList movies={movies} link={'movies/'} />}
    </>
  );
};

export default HomePage;
