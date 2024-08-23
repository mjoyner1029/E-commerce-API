// src/components/ProductForm.js
import React, { useState } from 'react';
import './ProductForm.css';
import { Form, Button } from 'react-bootstrap';

function ProductForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price });
    setName('');
    setPrice('');
  };

  return (
    <div className="product-form">
      <h2>Create Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter product name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;
