const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Включаем CORS
app.use(cors());

// Устанавливаем папку для статичных файлов
app.use(express.static(path.join(__dirname, 'public')));

// Главная страница будет показывать файл test.html
app.get('/', (req, res) => {
  console.log('GET запрос к корню сервера');
  res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
