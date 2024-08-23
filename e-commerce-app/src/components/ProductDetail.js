// src/components/ProductDetail.js
import React from 'react';
import './ProductDetail.css';

function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductDetail;
