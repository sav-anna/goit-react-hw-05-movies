import axios from 'axios';
const API_KEY = '23976029dbf9e65a92e47a5047de0abf';
const BASE_URL = 'https://api.themoviedb.org/3/';

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.

const getTrendingMovies = async () => {
  return await axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      return response.data.results.map(({ title, id }) => ({ title, id }));
    });
};
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
const getSearchedMovie = async query => {
  return await axios
    .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
    .then(response => {
      return response.data.results;
    });
};
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.

const getMovieDetails = async movieId => {
  return await axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(res => res.data)
    .then(({ title, poster_path, vote_average, overview, genres }) => ({
      title,
      poster: poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : 'https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg',
      vote_average,
      overview,
      genres,
    }));
};

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.

const getMovieCredits = async movieId => {
  return await axios
    .get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(response => {
      return response.data.cast.map(
        ({ credit_id, character, name, profile_path }) => ({
          credit_id,
          name,
          character,
          profile: profile_path
            ? `https://image.tmdb.org/t/p/w300${profile_path}`
            : 'https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg',
        })
      );
    });
};

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const getMovieReviews = async movieId => {
  return await axios
    .get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    )
    .then(response => {
      return response.data.results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));
    });
};
const api = {
  getTrendingMovies,
  getSearchedMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
export default api;
