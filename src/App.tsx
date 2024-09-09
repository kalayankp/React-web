// src/AuthScreen.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase'; // Import Firebase configuration
import * as Sentry from '@sentry/react';

function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  // Update the current user state
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');
    } catch (err) {
      setError(err.message);
      Sentry.captureException(err); // Send error to Sentry
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
    } catch (err) {
      setError(err.message);
      Sentry.captureException(err); // Send error to Sentry
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (err) {
      setError(err.message);
      Sentry.captureException(err); // Send error to Sentry
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {currentUser ? (
        <>
          <h2>Welcome, {currentUser.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>{isRegistering ? 'Register' : 'Login'}</h2>
          <form onSubmit={isRegistering ? handleRegister : handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              style={{ display: 'block', margin: '10px auto' }}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{ display: 'block', margin: '10px auto' }}
            />
            <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p>
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}
            <button onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Login' : 'Register'}
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default AuthScreen;
