import './App.css'
import Navigation from "./components/navigation/Navigation"
import { Route, Routes} from "react-router-dom";
import { lazy, Suspense } from 'react';
import MovieReviews from './components/moviereviews/MovieReviews';
import MovieCast from './components/moviecast/MovieCast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/moviespage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/moviedetailspage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/notfoundpage/NotFoundPage'))

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MovieReviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
