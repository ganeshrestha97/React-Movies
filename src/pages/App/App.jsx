import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage';
import { movies } from '../../data'
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(null);

  return (
      <main className="App">
        {user ? (
          <div className='navbar'>
            <NavBar user={user} />
            <Routes>
              <Route path='/' element={<MoviesListPage />} />
              <Route path='/movies/:movieName' element={<MovieDetailPage />} />
              <Route path='/actors' element={<ActorListPage />} />
              <Route path='actors/:actorName' element={<ActorDetailPage />} />
            </Routes>
          </div>
        ) : (
          <LoginPage onLogin={setUser} />
        )}
      </main>
  );
}
