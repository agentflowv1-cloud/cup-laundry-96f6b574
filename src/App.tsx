import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderTracker from './pages/OrderTracker';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-tracker" element={<OrderTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;