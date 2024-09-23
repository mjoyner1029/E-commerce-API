import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';
import ProductList from './components/products/ProductList';
import CustomerList from './components/customers/CustomerList';
import Cart from './components/cart/Cart';
import OrderHistory from './components/orders/OrderHistory';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/products" component={ProductList} />
                <Route path="/customers" component={CustomerList} />
                <Route path="/cart" component={Cart} />
                <Route path="/order-history" component={OrderHistory} />
                <Route path="/" exact component={HomePage} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
