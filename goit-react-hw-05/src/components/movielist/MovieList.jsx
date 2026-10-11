import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
    const locationMovieList = useLocation();
    return (
        <div>
            <ul className="movie-list">
            {movies.length > 0 && (
                movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={locationMovieList}>
                            <p>{movie.title}</p>
                        </Link>        
                    </li>
                ))
            )}
            </ul>
        </div>
    )
}
export default MovieList;