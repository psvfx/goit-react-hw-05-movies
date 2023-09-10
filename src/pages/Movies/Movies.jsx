import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [valueSearchMovies, setValueSearchMovies] = useState([]);
  const location = useLocation();
  const backLinkHRef = location.state?.from ?? '/';

  useEffect(() => {
    if (!searchQuery) return;

    async function searchMovies() {
      try {
        const resp = await fetchMoviesBySearch(searchQuery);
        setValueSearchMovies(resp.result);
      } catch (error) {
        console.error(error);
      }
    }
    searchMovies();
  }, [searchQuery]);

  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.searchMovies.value });
    e.target.reset();
  };

  return (
    <>
      <NavLink to={backLinkHRef}>Go back</NavLink>
      <h2>Search movies</h2>
      <form onSubmit={handleSubmitForm}>
        <lebel name="searchMovies">
          <input
            name="searchMovies"
            type="text"
            autoComplite="off"
            autoFocus
            placeholder="Search movies for name..."
          />
        </lebel>
      </form>
      <MoviesList movies={valueSearchMovies} />
    </>
  );
};
