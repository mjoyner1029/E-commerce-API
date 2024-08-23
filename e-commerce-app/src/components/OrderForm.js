// src/components/OrderForm.js
import React, { useState } from 'react';
import './OrderForm.css';
import { Form, Button } from 'react-bootstrap';

function OrderForm({ products, onSubmit }) {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productId: selectedProduct, quantity });
    setSelectedProduct('');
    setQuantity('');
  };

  return (
    <div className="order-form">
      <h2>Place Order</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductSelect">
          <Form.Label>Select Product</Form.Label>
          <Form.Control 
            as="select" 
            value={selectedProduct} 
            onChange={(e) => setSelectedProduct(e.target.value)} 
            required
          >
            <option value="">Choose a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
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

export default OrderForm;
