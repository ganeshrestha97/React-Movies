import MovieCard from "../../components/MovieCard/MovieCard"
import { movies } from "../../data"

export default function MoviesListPage() {
    return (
        <div className="movies-container">
            <h1>Movies List</h1>
            <div className="movies-list">
                {movies.map(movie => (
                    <MovieCard key={movie.title} movie={movie} />
                ))}
            </div>
        </div>
    )
}