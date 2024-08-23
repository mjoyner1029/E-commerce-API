// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CustomerForm from './CustomerForm';
import CustomerDetail from './CustomerDetail';
import ProductForm from './ProductForm';
import ProductDetail from './ProductDetail';
import OrderForm from './OrderForm';
import NotFound from './NotFound';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/create-customer" component={CustomerForm} />
        <Route path="/customer/:id" component={CustomerDetail} />
        <Route path="/create-product" component={ProductForm} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/place-order" component={OrderForm} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
