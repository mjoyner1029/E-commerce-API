// src/components/NotFound.js
import React from 'react';
import './NotFound.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container className="not-found">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Image src="/assets/404-image.jpg" fluid className="mb-4" />
          <h1>Oops! Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Button variant="primary" as={Link} to="/">Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
