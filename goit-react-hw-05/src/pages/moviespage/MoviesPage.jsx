import './MoviesPage.css'
import MovieList from '../../components/movielist/MovieList';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("query") || "";
    const [inputVal, setInputValue] = useState(query);

    const apitoken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjQ3ZGY3NDNlMzg3Y2ZmODBjMGU1NDdjMTJjM2E5NCIsIm5iZiI6MTc0NDk3Nzk0OC4zMzQsInN1YiI6IjY4MDI0MDFjZTAzMjA3ZDBiMWQ5MjExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Q2xRsc_zEegMAPsTvGYa-VUQFnntVU0EnuiYfllqsE';
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`;

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
                setMovies(response.data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [url]);

    const handleSearchChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSearchClick = (e) => {
        e.preventDefault();
        const trimmed = inputVal.trim();
        if (trimmed) {
            setSearchParams({ query: trimmed });
        }
    };

    return (
        <div className="movies_page-contaienr">
            <input className="movies_page-input" value={inputVal}  onChange={handleSearchChange}/>
            <button type="submit" className="movies_page-button" onClick={handleSearchClick}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {movies.length > 0 && <MovieList movies={ movies } />}
        </div>
    )
}
export default MoviesPage;