import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../API';
import { FormDiv, Form, Input, Button } from './Movies.styled';
import MoviesListComponent from '../../components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState('');

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        if (searchQuery) {
          const response = await fetchByQuery(searchQuery);
          if(response.length === 0) {
          return alert('There is nothing found by your query!');
          }
          setMovies(response);
        }
      } catch (error) {
        setOnError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [searchQuery]);

  const handleSubmit =  e => {
    e.preventDefault();
  
    if (query.trim() === '') {
      return alert('Enter your query!');
    }
    setSearchParams({ query });
  };
  

  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <FormDiv>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={query} onChange={onChange} />
          <Button type="submit">search</Button>
        </Form>
      </FormDiv>
      {isLoading && <Loader/>}
      
      {onError && <p>Error occurred while loading data.</p>}
      {movies && (
        <MoviesListComponent movies={movies}/>
      )}
    </>
  );
  
};

export default Movies;
