const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Включаем CORS
app.use(cors());

// Добавляем обработчик для корневого маршрута
app.get('/', (req, res) => {
  res.send('Сервер работает. Используйте /api/proxy/campaigns для POST-запросов.');
});

// Ваш существующий маршрут для /api/proxy/campaigns
app.post('/api/proxy/campaigns', (req, res) => {
  // Обработка вашего POST-запроса
  res.send('Запрос /api/proxy/campaigns успешно обработан');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
