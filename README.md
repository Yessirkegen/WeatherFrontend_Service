# Weather Frontend

## Описание

**Weather Frontend** — это современное веб-приложение, разработанное на **React**, которое позволяет пользователям:
- Просматривать текущую погоду и прогноз в выбранном городе.
- Видеть интерактивную карту с отображением погодных данных.
- Управлять своими подписками на ежедневные уведомления о погоде.
- Получать советы по одежде в зависимости от погодных условий.

Фронтенд взаимодействует с бэкенд-сервисами **Subscription Service** и **WeatherCast Service** для получения данных о подписках и погоде соответственно.


## Технологии

- **React**: Библиотека для создания пользовательского интерфейса.
- **React Router Dom**: Для маршрутизации в приложении.
- **Axios**: Для выполнения HTTP-запросов к бэкенд-сервисам.
- **Leaflet** и **React-Leaflet**: Для отображения интерактивной карты с погодными данными.
- **Moment.js**: Для работы с датами и временем.
- **Gocron**: Для планирования задач с учетом часовых поясов (на бэкенде).
- **GORM**: ORM для работы с PostgreSQL на бэкенде.
- **Singleton Pattern**: Для управления конфигурацией.
- **Factory Method Pattern**: Для создания объектов уведомлений разного типа (email, SMS).
- **Logrus**: Для структурированного логирования на бэкенде.
- **Godotenv**: Для загрузки переменных окружения из файла `.env` на бэкенде.

## Установка и запуск

### Предварительные требования

Перед началом убедитесь, что у вас установлены следующие инструменты:

- **Node.js** и **npm**: Для работы с фронтендом на React.
- **Git**: Для клонирования репозитория (опционально).

### Шаги установки

1. **Клонируйте репозиторий:**

    ```bash
    git clone https://github.com/yourusername/weather-frontend.git
    cd weather-frontend
    ```

2. **Создайте файл `.env` в корне проекта и добавьте следующие переменные:**

    ```env
    REACT_APP_API_URL=http://localhost:8080/api
    REACT_APP_WEATHER_SERVICE_URL=http://localhost:8000
    ```

    **Примечание:**
    - `REACT_APP_API_URL`: URL вашего **Subscription Service**.
    - `REACT_APP_WEATHER_SERVICE_URL`: URL вашего **WeatherCast Service**.

3. **Установите зависимости:**

    ```bash
    npm install
    ```

4. **Запустите фронтенд:**

    ```bash
    npm start
    ```

    **Эта команда запустит локальный сервер разработки на `http://localhost:3000`. Откройте этот URL в браузере, чтобы увидеть приложение.**

## Использование

### API Эндпоинты

Фронтенд взаимодействует с следующими бэкенд-эндпоинтами:

- **Authentication:**
  - **POST** `/api/auth/login`: Вход пользователя.
  - **POST** `/api/auth/register`: Регистрация пользователя.
  - **GET** `/api/auth/profile`: Получение информации о текущем пользователе.

- **Subscriptions:**
  - **POST** `/api/subscriptions`: Создание новой подписки.
  - **GET** `/api/subscriptions`: Получение списка подписок текущего пользователя.
  - **DELETE** `/api/subscriptions/{id}`: Удаление подписки по ID.

- **Weather:**
  - **GET** `/api/weather?city={city}`: Получение текущей погоды для указанного города.
  - **GET** `/api/weather/map-data`: Получение данных для отображения на карте.

### Основные функции

1. **Аутентификация:**
   - Регистрация нового пользователя через форму.
   - Вход существующего пользователя.
   - Управление сессией пользователя с использованием JWT-токенов.

2. **Управление подписками:**
   - Создание новых подписок на прогнозы погоды для выбранных городов.
   - Просмотр списка текущих подписок.
   - Удаление ненужных подписок.

3. **Отображение погоды:**
   - Просмотр текущей погоды и прогноза в выбранном городе.
   - Интерактивная карта с отображением погодных данных в разных регионах.

4. **Получение уведомлений:**
   - Ежедневные уведомления о погоде с советами по одежде, отправляемые по email или SMS.
