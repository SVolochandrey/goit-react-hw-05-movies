import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../../API';
import Loader from 'components/Loader/Loader';
import {
  Btn,
  MovieContainer,
  Img,
  MovieInfo,
  MovieTitle,
  AddInfo,
  InfoList,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [onError, setOnError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/';

  const { poster, title, original_title, releaseYear, userScore, overview, genres } =
    movie ?? {};

  useEffect(() => {
    setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await fetchMovieDetails(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        setOnError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const backToMovies = () => {
    navigate(backLinkHref);
  };

  return (
    <div>
      <Btn type="button" onClick={backToMovies}>
        Back to movies
      </Btn>
      {isLoading && <Loader />}
      {onError && (
        <p>We are sorry. Something went wrong. Please try again later</p>
      )}
      {movie && (
        <div>
          <MovieContainer>
            <Img
              src={
                poster
                  ? `https://image.tmdb.org/t/p/w200/${poster}`
                  : 'https://naked-science.ru/wp-content/uploads/2016/04/article_face.jpg'
              }
              alt={title}
            />
            <MovieInfo>
              <MovieTitle>
                {title || original_title} ({releaseYear})
              </MovieTitle>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </MovieInfo>
          </MovieContainer>

          <AddInfo>Additional information</AddInfo>

          <InfoList>
            <li>
              <InfoLink to={'cast'} state={{ from: backLinkHref }}>
                Cast
              </InfoLink>
            </li>
            <li>
              <InfoLink to={'reviews'} state={{ from: backLinkHref }}>
                Reviews
              </InfoLink>
            </li>
          </InfoList>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
