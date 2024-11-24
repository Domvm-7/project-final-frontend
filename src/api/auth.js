//auth.js

import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const register = (formData) =>
  axios.post(`${API_URL}/register`, formData);

export const login = (formData) => axios.post(`${API_URL}/login`, formData);

export const getItems = (token) =>
  axios.get(`${API_URL}/items`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addItem = (token, data) =>
  axios.post(`${API_URL}/items`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
