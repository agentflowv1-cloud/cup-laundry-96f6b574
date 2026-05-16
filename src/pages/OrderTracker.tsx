import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderStatus from '../components/OrderStatus';
import { useOrderStore } from '../store/orderStore';

function OrderTracker() {
  const [orderStatus, setOrderStatus] = useState('');
  const { order } = useOrderStore();

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const response = await axios.get(`https://example.com/api/orders/${order.id}`);
        setOrderStatus(response.data.status);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrderStatus();
  }, [order]);

  return (
    <div className="order-tracker">
      <h1>Order Tracker</h1>
      <OrderStatus status={orderStatus} />
    </div>
  );
}

export default OrderTracker;