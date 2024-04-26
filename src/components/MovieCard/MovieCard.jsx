import { movies } from '../../data'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
    return (
        <Link to={`/movies/${encodeURIComponent(movie.title)}`} style={{ textDecoration: 'none' }}> 
            <div className="movie-card" style={{ backgroundImage: `url(${movie.posterPath})` }}>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>Release Date: {movie.releaseDate}</p>
                </div>
            </div>
        </Link>
    )
}