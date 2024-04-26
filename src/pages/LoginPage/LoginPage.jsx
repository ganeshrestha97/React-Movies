import { useState } from 'react';


export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (username) {
        onLogin(username);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}