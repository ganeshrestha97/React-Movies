import { movies } from '../../data'
import ActorCard from '../../components/ActorCard/ActorCard'

export default function ActorListPage() {
    const allActors = new Set()
    movies.forEach(movie => {
        movie.cast.forEach(actor => allActors.add(actor))
    })
    const uniqueActors = Array.from(allActors)

    return (
        <div>
            <h1>Actors List</h1>
            <div className='actors-grid'>
                {uniqueActors.map(actor => (
                    <ActorCard key={actor} actor={actor} />
                ))}
            </div>
        </div>
    )
}