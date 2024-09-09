import React from 'react';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        credentials: 'include' // Include session cookies
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
