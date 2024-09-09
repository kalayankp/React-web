import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  
  const handleLogin = () => {
    axios.post('http://localhost:3000/api/login', { username, password })
      .then(response => {
        setToken(response.data.token);
        setMessage('Logged in successfully');
      })
      .catch(error => setMessage('Login failed'));
  };

  const fetchProtectedData = () => {
    axios.get('http://localhost:3000/api/protected', {
      headers: {
        Authorization: token
      }
    })
    .then(response => setMessage(response.data.message))
    .catch(error => setMessage('Failed to fetch protected data'));
  };

  return (
    <div>
      <h1>Authentication Demo</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchProtectedData}>Fetch Protected Data</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
