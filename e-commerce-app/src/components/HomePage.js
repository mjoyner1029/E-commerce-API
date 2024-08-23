// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import { Button, Card, Image } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="homepage">
      <Image src="/assets/welcome-image.jpg" fluid className="img-fluid mb-4" />
      <h1 className="text-center">Welcome to Our Store!</h1>
      <div className="text-center mt-5">
        <Button variant="primary" href="/shop">Shop Now</Button>
      </div>
      <div className="mt-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Featured Products</Card.Title>
            <Card.Text>
              Check out our featured products for amazing deals!
            </Card.Text>
            <Button variant="secondary" href="/products">View Products</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
