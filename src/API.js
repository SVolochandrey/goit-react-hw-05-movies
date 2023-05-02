import axios from 'axios';
import noPhoto from './components/Images/backJPG.png';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'f142a78acdaeb700a5127e9c79c73889',
  include_adults: false,
};

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const fetchTrending = async () => {
  return axios
    .get(`/trending/all/day?`)
    .then(({ data: { results } }) =>
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title,
        poster: IMAGE_BASE_URL + poster,
      }))
    )
    .catch(error => {
      alert(error.massage);
    });
};

export const fetchByQuery = async query => {
  return axios
    .get(`/search/movie?query=${query}`)
    .then(({ data: { results } }) =>
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title,
        poster: IMAGE_BASE_URL + poster,
      }))
    )
    .catch(error => {
      alert(error.massage);
    });
};

export const fetchMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?`)
    .then(
      ({
        data: {
          id,
          poster_path: poster,
          title,
          release_date: releaseYear,
          vote_average: userScore,
          overview,
          genres,
        },
      }) => ({
        id,
        poster: IMAGE_BASE_URL + poster,
        title,
        releaseYear: new Date(releaseYear).getFullYear(),
        userScore: Math.round(userScore * 10),
        overview,
        genres,
      })
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const fetchMovieCredits = movieId => {
  return axios
    .get(`/movie/${movieId}/credits?`)
    .then(({ data: { cast } }) =>
      cast.map(({ id, name, character, profile_path: photo }) => ({
        id,
        name,
        character,
        photo: photo ? IMAGE_BASE_URL + photo : noPhoto,
      }))
    )
    .catch(error => {
      alert(error.massage);
    });
};

export const fetchMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews?`)
    .then(({ data: { results } }) =>
      results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }))
    )
    .catch(error => {
      alert(error.massage);
    });
};

