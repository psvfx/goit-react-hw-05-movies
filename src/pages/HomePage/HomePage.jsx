import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'services/api';
import MoviesList from 'component/MoviesList/MoviesList';
import { Loader } from 'component/Loader/Loader';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const resp = await fetchTrendingMovies();
        setTrendingMovies(resp.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={trendingMovies} />
    </main>
  );
};