import { fetchMovieReviews } from '../../API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
