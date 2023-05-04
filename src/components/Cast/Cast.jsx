import { fetchMovieCredits } from '../../API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noPhoto from '../Images/backJPG.png';

import {
  CastContainer,
  CastList,
  CastItem,
  Img,
  CastDescr,
  CastName,
  CastChar,
} from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState(null);
  const [onError, setOnError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCredits = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        if (data.length === 0) {
          return alert('Ther is nothing found!!!');
        }
        setCredits(data);
      } catch (error) {
        setOnError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCredits();
  }, [movieId]);

  return (
    <CastContainer>
      {credits && (
        <CastList>
          {credits.map(({ id, name, character, poster }) => {
            return (
              <CastItem key={id}>
                <Img
                  src={
                    poster
                      ? `https://image.tmdb.org/t/p/w200/${poster}`
                      : noPhoto
                  }
                  alt={name}
                />
                <CastDescr>
                  <CastName>{name}</CastName>
                  <CastChar>Character: {character}</CastChar>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      )}
      {isLoading && <Loader />}
      {onError && <p>Something went wrong</p>}
    </CastContainer>
  );
};

export default Cast;
