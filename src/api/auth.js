// frontend/src/api/auth.js
import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/auth";

export const register = (formData) =>
  axios.post(`${API_URL}/register`, formData);
export const login = (formData) => axios.post(`${API_URL}/login`, formData);
