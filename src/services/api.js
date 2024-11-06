import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api', // Укажите базовый URL вашего бэкенда
});

// Добавляем интерсептор для установки токена в заголовки запросов
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
