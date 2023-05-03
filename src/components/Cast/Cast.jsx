import { fetchMovieCredits } from '../../API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  CastContainer,
  CastList,
  CastItem,
  Img,
  CastDescr,
  CastName,
  CastChar,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCredits(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCredits();
  }, [movieId]);

  return (
    <CastContainer>
      {credits.length > 0 ? (
        <CastList>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <CastItem key={id}>
                <Img src={photo} alt={name} />
                <CastDescr>
                  <CastName>{name}</CastName>
                  <CastChar>Character: {character}</CastChar>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <p>Loading...</p>
      )}
    </CastContainer>
  );
};

export default Cast;
