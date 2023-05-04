import { useEffect, useState } from 'react';
import { fetchTrending } from '../../API';
import MovieListComponent from 'components/MoviesList/MoviesList';
import { HomeContainer, HomeTitle } from './Home.styled';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrending();
        setMovies(trendingMovies);
      } catch (error) {
        setOnError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      {isLoading && <Loader />}
      {onError && <p>Something went wrong!</p>}
      {movies && <MovieListComponent movies={movies} />}
    </HomeContainer>
  );
};

export default Home;
