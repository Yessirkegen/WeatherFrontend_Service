import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../services/auth';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then((response) => setUser(response.data))
      .catch((error) => console.error('Ошибка при загрузке профиля:', error));
  }, []);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>Email: {user.email}</p>
      {/* Добавьте дополнительные поля профиля при необходимости */}
    </div>
  );
};

export default Profile;
