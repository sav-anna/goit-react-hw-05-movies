import { useState, useEffect } from 'react';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';

import css from './Cast.module.css';

const { useParams } = require('react-router-dom');

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);
    api
      .getMovieCredits(movieId)
      .then(cast => {
        setCast(cast);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.length === 0 && !isLoading ? (
        <p className={css.notfound}>Cast not found!...🥺</p>
      ) : (
        cast.map(({ credit_id, character, name, profile }) => {
          return (
            <li key={credit_id}>
              <img className={css.castImg} src={profile} alt={name} />
              <p className={css.castName}>{name}</p>
              <p className={css.castCharacter}>Character: {character}</p>
            </li>
          );
        })
      )}

      <Loader loading={isLoading} />
    </ul>
  );
};

export default Cast;
