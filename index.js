const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('GET запрос к корню сервера');
  res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

app.post('/api/proxy/campaigns', async (req, res) => {
  try {
    const response = await axios.post(
      'https://partner.onlytraffic.com/api/marketer?do=campaigns', 
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'api_auth_key': '55596-9C427-724C7-0A129'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
    res.status(500).json({ error: 'Ошибка при обработке запроса.' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
