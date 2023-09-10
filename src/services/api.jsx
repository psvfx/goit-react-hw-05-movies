import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: 'b0e90257c8451bf4533c703dab2143f0',
};

export async function fetchTrendingMovies() {
  const resp = await axios.get(`trending/movie/day`);

  return resp.data;
}

export const fetchMoviesById = async moviesId => {
  const resp = await axios.get(`/movie/${moviesId}?&language=en-US`);

  return resp.data;
};

export async function fetchMoviesBySearch(searchQuery) {
  const resp = await axios.get(`search/movie?query=${searchQuery}`);

  return resp.data;
}

export async function fetchCastMovie(moviesId) {
  const resp = await axios.get(`movie/${moviesId}/credits`);

  return resp.data;
}
export async function fetchReviwsMovie(moviesId) {
  const resp = await axios.get(`movie/${moviesId}/reviews`);

  return resp.data;
}

// https://www.themoviedb.org
// Ключ API: b0e90257c8451bf4533c703dab2143f0
// Токен доступу для читання API:
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGU5MDI1N2M4NDUxYmY0NTMzYzcwM2RhYjIxNDNmMCIsInN1YiI6IjY0ZWNlZDM3YzNjODkxMDEwMDdlMzhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBxkzQFN8JiqeqyXLnMCyFsaeHODgSvO0iMzD5J8OXs
// Документація  https://developer.themoviedb.org/docs
// https://www.themoviedb.org/talk/64eceef7c613ce00ac42e323?page=1#64eceef7c613ce00ac42e326
