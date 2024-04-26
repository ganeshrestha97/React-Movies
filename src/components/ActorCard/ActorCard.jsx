import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ActorCard({ actor }) {
  // State to hold the random number
  const [randomNumber, setRandomNumber] = useState(null)

  useEffect(() => {
    // Attempt to retrieve a stored random number from localStorage
    let storedRandomNumber = localStorage.getItem(`randomNumber_${actor}`)
    
    if (storedRandomNumber) {
      setRandomNumber(parseInt(storedRandomNumber))
    } else {
      const newRandomNumber = Math.floor(Math.random() * 100)
      localStorage.setItem(`randomNumber_${actor}`, newRandomNumber.toString())
      setRandomNumber(newRandomNumber)
    }
  }, [actor]) 

  // Generate the image URL using the random number
  const imageUrl = `https://picsum.photos/200/300?grayscale=${randomNumber}`

  return (
    <Link to={`/actors/${encodeURIComponent(actor)}`} style={{ textDecoration: 'none' }}>
      <div className="actor-card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className='actor-name-overlay'>
            <h3>{actor}</h3>  
        </div>
      </div>
    </Link>
  )
}
