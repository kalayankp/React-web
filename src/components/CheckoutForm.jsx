import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './CheckoutForm.css'; // Ensure this path is correct

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      try {
        // Send the token to your server
        const response = await axios.post('http://localhost:3001/api/charge', { token: token.id });
        console.log('Payment successful', response.data);
        setSuccess('Payment successful! Thank you for your purchase.');
      } catch (err) {
        setError('Payment failed. Please try again.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit}>
        <h2>Enter Payment Details</h2>
        <div className="form-group">
          <CardElement className="card-element" />
        </div>
        <button type="submit" className="submit-button" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay $10.00'}
        </button>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
