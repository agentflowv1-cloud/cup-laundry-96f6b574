import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

interface OrderStatusProps {
  status: string;
}

function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="order-status">
      <FiCheckCircle size={20} color="green" />
      <span>{status}</span>
    </div>
  );
}

export default OrderStatus;