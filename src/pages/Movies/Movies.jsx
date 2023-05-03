import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchByQuery } from '../../API';
import { FormDiv, Form, Input, Button } from './Movies.styled';
import MoviesListComponent from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    searchQuery && fetchByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetchByQuery(query);
    setMovies(response);
    setSearchParams({ query });
    setQuery('');
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
      {movies.length > 0 && (
        <MoviesListComponent movies={movies} location={location} />
      )}
    </>
  );
};

export default Movies;
