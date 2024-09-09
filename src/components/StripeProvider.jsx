import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your publishable key from Stripe
const stripePromise = loadStripe('pk_test_51PwdpCRqPtsmLe3o8BOCFbiuI45Piq3b2alhAjy6lMvHkIBc5cVmIJRszESuIJ0AWn2uXhyaX5nPRht2AdmqZGyn00IdRh3TGo');
const StripeProvider = ({ children }) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeProvider;
