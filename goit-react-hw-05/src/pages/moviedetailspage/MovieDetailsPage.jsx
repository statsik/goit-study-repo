import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams, Outlet, NavLink} from "react-router-dom";
import GoBack from "../../components/goback/Go_back";
import './MovieDetailsPage.css'

const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const locationDetailsPage = useLocation();
    const goBack = useRef(locationDetailsPage?.state ?? '/');

    const [movie, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apitoken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjQ3ZGY3NDNlMzg3Y2ZmODBjMGU1NDdjMTJjM2E5NCIsIm5iZiI6MTc0NDk3Nzk0OC4zMzQsInN1YiI6IjY4MDI0MDFjZTAzMjA3ZDBiMWQ5MjExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Q2xRsc_zEegMAPsTvGYa-VUQFnntVU0EnuiYfllqsE';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    const options = {
      headers: {
        Authorization: `Bearer ${apitoken}`
      }
    };

    axios.get(url, options)
      .then(response => console.log(response))
      .catch(err => console.error(err));

    useEffect(() => {
        const fetchMovie = async () => {
            setError(null);
            setLoading(true);
            try {
                const response = await axios.get(url, options);
                setMovies(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [url]);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            <GoBack path={goBack.current} />
            {movie && (
                <div>
                    <div className="movie_details_page-container">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className="movie-over-group">
                            <h2>{movie.title}</h2>
                            <p>Overview: {movie.overview}</p>
                            <p>Release data: {movie.release_date}</p>
                            <p>Run time: {movie.runtime}</p>
                            {movie.genres && movie.genres.length > 0 && (
                                <div>
                                    <p>Genres:</p>
                                    <ul className="genres-list">
                                        {movie.genres.map((genre) => (
                                            <li key={genre.id}>{genre.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        
                    </div>
                    <ul className="navlink-det-pag">
                        <li><NavLink to={`/movies/${movie.id}/cast`} className="navlink-cast">Cast</NavLink></li>
                        <li><NavLink to={`/movies/${movie.id}/reviews`} className="navlink-reviews">Reviews</NavLink></li>
                    </ul>
                    
                    <Outlet />
                </div>
            )}
        </div>
    )
}
export default MovieDetailsPage;