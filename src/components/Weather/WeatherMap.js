import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from '../../services/api';
import L from 'leaflet';

// Настройка иконки маркера (необходимо из-за особенностей Leaflet в React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WeatherMap = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    loadWeatherData();
    // Подключение к WebSocket для обновлений в реальном времени (опционально)
  }, []);

  const loadWeatherData = async () => {
    try {
      const response = await axios.get('/weather/map-data');
      setWeatherData(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке данных карты:', error);
    }
  };

  return (
    <div>
      <h2>Карта погоды</h2>
      <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {weatherData.map((data) => (
          <Marker key={data.id} position={[data.lat, data.lon]}>
            <Popup>
              <strong>{data.city}</strong>
              <br />
              Температура: {data.temperature}°C
              <br />
              {data.summary}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
