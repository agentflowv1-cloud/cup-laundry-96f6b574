import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Stripe } from 'stripe';
import { db } from '../types/db';

const Booking = () => {
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropOffAddress, setDropOffAddress] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/booking', {
        pickupAddress,
        dropOffAddress,
        pickupDate,
        dropOffDate,
      });
      const stripe = new Stripe('YOUR_STRIPE_SECRET_KEY', {
        apiVersion: '2022-11-15',
      });
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  ];

  return (
    <div>
      <h1>Schedule a Pickup or Drop-off</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pickup Address:
          <input type="text" value={pickupAddress} onChange={(event) => setPickupAddress(event.target.value)} />
        </label>
        <label>
          Drop-off Address:
          <input type="text" value={dropOffAddress} onChange={(event) => setDropOffAddress(event.target.value)} />
        </label>
        <label>
          Pickup Date:
          <input type="date" value={pickupDate} onChange={(event) => setPickupDate(event.target.value)} />
        </label>
        <label>
          Drop-off Date:
          <input type="date" value={dropOffDate} onChange={(event) => setDropOffDate(event.target.value)} />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export { Booking };