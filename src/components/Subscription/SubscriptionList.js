import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import SubscriptionForm from './SubscriptionForm';

const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const loadSubscriptions = async () => {
    try {
      const response = await axios.get('/subscriptions');
      setSubscriptions(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке подписок:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/subscriptions/${id}`);
      loadSubscriptions();
    } catch (error) {
      console.error('Ошибка при удалении подписки:', error);
    }
  };

  return (
    <div>
      <h2>Мои подписки</h2>
      <SubscriptionForm onSubscriptionAdded={loadSubscriptions} />
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id}>
            {sub.city} ({sub.timezone}) - {sub.type}
            <button onClick={() => handleDelete(sub.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
