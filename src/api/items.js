// frontend/src/api/items.js
import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api/items";

export const getItems = (token) =>
  axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addItem = (token, data) =>
  axios.post(API_URL, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Additional functions for update or delete can be added similarly.
