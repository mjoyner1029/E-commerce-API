import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust based on your Flask API

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const fetchCustomers = () => axios.get(`${API_URL}/customers`);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/customers/${id}`);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);
export const addCustomer = (data) => axios.post(`${API_URL}/customers`, data);
export const updateCustomer = (id, data) => axios.put(`${API_URL}/customers/${id}`, data);
export const addProduct = (data) => axios.post(`${API_URL}/products`, data);
export const updateProduct = (id, data) => axios.put(`${API_URL}/products/${id}`, data);
