import { useParams } from 'react-router-dom';
import { movies } from '../../data'

export default function MovieDetailPage() {
    const { movieName } = useParams()
    const movie = movies.find(m => m.title === decodeURIComponent(movieName))

    if(!movie) {
        return (
            <div>Movie not Found!</div>
        )
    }

    return (
        <div className='movie-detail'>
            <h1>Movie Detail </h1>
            <h2>{movie.title}</h2>
            <img src={movie.posterPath} alt={`Poster of ${movie.title}`} />
            <p><strong>Release Date:</strong> {movie.releaseDate}</p>
            <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
        </div>
    )
}