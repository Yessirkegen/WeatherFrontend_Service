import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Здесь вы можете проверить, авторизован ли пользователь, и показать соответствующие ссылки
  const isAuthenticated = false; // Заглушка, замените на реальную проверку

  return (
    <header>
      <nav>
        <Link to="/">Погода</Link>
        <Link to="/map">Карта</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile">Профиль</Link>
            <Link to="/subscriptions">Мои подписки</Link>
            <Link to="/logout">Выйти</Link>
          </>
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
