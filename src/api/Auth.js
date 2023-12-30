import axios from 'axios';

const API_URL = '/api/auth/'; 

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
}

export const refreshAccessToken = async (refreshToken) => {
  const response = await axios.post(`${API_URL}/refresh`, {refreshToken});
  return response.data; 
}