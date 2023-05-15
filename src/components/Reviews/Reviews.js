import { useState, useEffect } from 'react';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);
    api
      .getMovieReviews(movieId)
      .then(res => {
        setReviews(res);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && !isLoading ? (
        <p className={css.notfound}>Review not found!...🥺</p>
      ) : (
        <ul className={css.reviewsLIst}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li className={css.reviewItem} key={id}>
                <h4 className={css.reviewAuthor}>Author: {author}</h4>
                <p className={css.reviewContent}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}

      <Loader loading={isLoading} />
    </>
  );
};
export default Reviews;
