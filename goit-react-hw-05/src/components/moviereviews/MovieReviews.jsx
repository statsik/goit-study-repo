import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MovieReviews.css'

const MovieReviews = () => {
    const { movieId } = useParams();

    const [reviews, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apitoken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjQ3ZGY3NDNlMzg3Y2ZmODBjMGU1NDdjMTJjM2E5NCIsIm5iZiI6MTc0NDk3Nzk0OC4zMzQsInN1YiI6IjY4MDI0MDFjZTAzMjA3ZDBiMWQ5MjExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Q2xRsc_zEegMAPsTvGYa-VUQFnntVU0EnuiYfllqsE';
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;

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
                setReview(response.data.results);
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
            {reviews.length > 0 && (
                <div>
                    <h3>Reviews:</h3>
                    {reviews.map((review, index) => (
                        <div key={index}>
                            <h4>{review.author}</h4>
                            <p>{review.content}</p>
                        </div>
                    ))}
                </div>
            )}
            {!loading && !error && reviews.length === 0 && (
                <p>No reviews found.</p>
            )}
        </div>
    )
}
export default MovieReviews;