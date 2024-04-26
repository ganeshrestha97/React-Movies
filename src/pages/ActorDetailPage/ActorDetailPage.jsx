import { useParams } from "react-router-dom";
import { movies } from '../../data'

export default function ActorDetailPage() {
    const { actorName } = useParams()
    const actorMovies = movies.filter(movie => movie.cast.includes(decodeURIComponent(actorName)))

    return (
        <div className="actor-detail">
            <h1>{decodeURIComponent(actorName)}</h1>
            <ul>
                {actorMovies.map(movie => (
                    <li key={movie.title}>{movie.title} - {movie.releaseDate}</li>
                ))}
            </ul>
        </div>

    )
}