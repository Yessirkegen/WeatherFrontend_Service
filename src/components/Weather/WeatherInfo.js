import React, { useState } from 'react';
import axios from '../../services/api';

const WeatherInfo = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Ошибка при получении погоды:', error);
    }
  };

  return (
    <div>
      <h2>Погода</h2>
      <input
        type="text"
        placeholder="Введите город"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Поиск</button>
      {weather && (
        <div>
          <h3>{weather.city}</h3>
          <p>Температура: {weather.temperature}°C</p>
          <p>{weather.summary}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
