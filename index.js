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

app.get('/', (req, res) => {
  console.log('GET запрос к корню сервера');
  res.send('Сервер работает. Используйте /api/proxy/campaigns для POST-запросов.');
});


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
