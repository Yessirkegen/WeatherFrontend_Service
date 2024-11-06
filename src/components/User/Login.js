import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      // Сохраните токен в localStorage или в контексте
      localStorage.setItem('token', response.data.token);
      history.push('/');
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };

  return (
    <div>
      <h2>Войти</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
