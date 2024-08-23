// src/components/CustomerDetail.js
import React from 'react';
import './CustomerDetail.css';

function CustomerDetail({ customer }) {
  return (
    <div className="customer-detail">
      <h2>Customer Details</h2>
      <p><strong>Name:</strong> {customer.name}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
    </div>
  );
}

export default CustomerDetail;
