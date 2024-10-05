// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api', // Set your API base URL
  timeout: 10000, // 10 seconds timeout
});

// Optional: Add interceptors for request/response if needed
api.interceptors.request.use(config => {
  // You can add headers or modify the config here
  return config;
}, error => {
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  return response.data; // You can modify the response structure here
}, error => {
  return Promise.reject(error);
});

export default api;
