import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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
              src={
                poster
                  ? `https://image.tmdb.org/t/p/w200/${poster}`
                  : 'https://naked-science.ru/wp-content/uploads/2016/04/article_face.jpg'
              }
              alt={title}
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

MovieListComponent.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_title: PropTypes.string,
      poster: PropTypes.string,
    })
  ).isRequired,
};

export default MovieListComponent;
