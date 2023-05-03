import { useEffect, useState } from 'react';
import { fetchTrending } from '../../API';
import MovieListComponent from 'components/MoviesList/MoviesList';
import { HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrending();
        setMovies(trendingMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, something went wrong: {error.message}</p>;
  }

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      {movies.length > 0 && <MovieListComponent movies={movies} />}
    </HomeContainer>
  );
};

export default Home;
