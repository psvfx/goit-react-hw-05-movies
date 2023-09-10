import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const ErrorMessage = lazy(() => import('./ErrorMessages/ErrorMessages'));
const MovieDetailes = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetailes />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<ErrorMessage />} />
        </Route>
      </Routes>
    </div>
  );
};

// https://www.themoviedb.org
// Ключ API: b0e90257c8451bf4533c703dab2143f0
// Токен доступу для читання API:
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGU5MDI1N2M4NDUxYmY0NTMzYzcwM2RhYjIxNDNmMCIsInN1YiI6IjY0ZWNlZDM3YzNjODkxMDEwMDdlMzhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBxkzQFN8JiqeqyXLnMCyFsaeHODgSvO0iMzD5J8OXs
// Документація  https://developer.themoviedb.org/docs
// https://www.themoviedb.org/talk/64eceef7c613ce00ac42e323?page=1#64eceef7c613ce00ac42e326
