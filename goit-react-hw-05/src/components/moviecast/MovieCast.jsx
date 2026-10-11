import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MovieCast.css'

const MovieCast = () => {
    

    const { movieId } = useParams();

    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apitoken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjQ3ZGY3NDNlMzg3Y2ZmODBjMGU1NDdjMTJjM2E5NCIsIm5iZiI6MTc0NDk3Nzk0OC4zMzQsInN1YiI6IjY4MDI0MDFjZTAzMjA3ZDBiMWQ5MjExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Q2xRsc_zEegMAPsTvGYa-VUQFnntVU0EnuiYfllqsE';
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

    useEffect(() => {
        const fetchMovie = async () => {
            const options = {
                headers: {
                    Authorization: `Bearer ${apitoken}`
                }
            };
            setError(null);
            setLoading(true);
            try {
                const response = await axios.get(url, options);
                setCredits(response.data.cast);
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
            {credits.length > 0 && (
                <div>
                    <h3>Cast:</h3>
                    <ul className="movie-cast-list">
                        {credits.map((actor) => (
                            <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
                        ))}
                    </ul>
                </div>
            )}
            {!loading && !error && credits.length === 0 && (
                <p>No cast found.</p>
            )}
        </div>
    )
}
export default MovieCast;