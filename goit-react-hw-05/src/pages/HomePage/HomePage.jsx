import MovieList from "../../components/movielist/MovieList";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apitoken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjQ3ZGY3NDNlMzg3Y2ZmODBjMGU1NDdjMTJjM2E5NCIsIm5iZiI6MTc0NDk3Nzk0OC4zMzQsInN1YiI6IjY4MDI0MDFjZTAzMjA3ZDBiMWQ5MjExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Q2xRsc_zEegMAPsTvGYa-VUQFnntVU0EnuiYfllqsE';
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    useEffect(() => {
        const fetchMovie = async () => {
            const options = {
                headers: {
                    Authorization: `Bearer ${apitoken}`
                }
            };
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(url, options);
                console.log(response);
                setMovies(response.data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, []);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {movies.length > 0 && <MovieList movies={ movies } />}
        </div>
    )
    
}
export default HomePage;