import axios from 'axios';

// Use environment variable for base URL, fallback to relative /api if not set
export const API_BASE_URL = "/api/v1"

export const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
