import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
