import { useLocation } from 'react-router-dom';
import {
  MovieList,
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
} from '../../pages/Home/Home.styled';

const MovieListComponent = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(({ id, title, original_title, poster }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={poster}
              alt={title}
              onError={e => {
                e.target.src = 'Something wrong. Reload the page';
              }}
            />
            <MovieTitle>
              <h3>{title || original_title}</h3>
            </MovieTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};

export default MovieListComponent;
