import axios from 'axios';

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // Use the URL from .env
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
