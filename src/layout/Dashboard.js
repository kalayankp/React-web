import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/dashboard', {
          method: 'GET',
          credentials: 'include' // Include session cookies
        });

        const data = await response.json();

        if (response.ok) {
          setMessage(data.message);

          // Fetch orders after successful session validation
          const orderResponse = await fetch('http://localhost:5000/api/orders', {
            method: 'GET',
            credentials: 'include' // Include session cookies
          });
          const ordersData = await orderResponse.json();
          setOrders(ordersData);
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('Unable to fetch data');
      }
    };

    checkSession();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      {orders.length > 0 && (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              {order.product}: ${order.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
