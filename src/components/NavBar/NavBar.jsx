import {Link} from 'react-router-dom';

export default function NavBar({ user }) {
    return (
        <nav>
            <p>Welcome, <strong>{user}</strong>!</p>
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <Link to='/movies/:movieName'>Movies</Link>
            &nbsp; | &nbsp;
            <Link to='/actors'>Actors</Link>
        </nav>
    )
}