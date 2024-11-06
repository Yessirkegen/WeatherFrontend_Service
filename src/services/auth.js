import axios from './api';

export const login = (email, password) => {
  return axios.post('/auth/login', { email, password });
};

export const register = (email, password) => {
  return axios.post('/auth/register', { email, password });
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = () => {
  return axios.get('/auth/profile');
};
