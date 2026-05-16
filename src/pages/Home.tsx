import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Order Tracking System</h1>
      <p>Track the status of your order in real-time</p>
      <Link to="/order-tracker">Start Tracking</Link>
    </div>
  );
}

export default Home;