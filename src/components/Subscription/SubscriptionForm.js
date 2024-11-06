import React, { useState } from 'react';
import axios from '../../services/api';

const SubscriptionForm = ({ onSubscriptionAdded }) => {
  const [city, setCity] = useState('');
  const [timezone, setTimezone] = useState('');
  const [type, setType] = useState('email');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/subscriptions', { city, timezone, type, frequency });
      setCity('');
      setTimezone('');
      onSubscriptionAdded();
    } catch (error) {
      console.error('Ошибка при добавлении подписки:', error);
    }
  };

  return (
    <div>
      <h3>Добавить подписку</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Часовой пояс (e.g., Europe/Moscow)"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="email">Email</option>
          <option value="sms">SMS</option>
        </select>
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="daily">Ежедневно</option>
          <option value="weekly">Еженедельно</option>
        </select>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
