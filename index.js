const express = require('express');
const axios = require('axios');
const app = express();

// Порт сервера обертки
const PORT = process.env.PORT || 3000;

// Middleware для работы с JSON
app.use(express.json());

// POST-обертка для запроса к конечному API
app.post('/api/proxy/campaigns', async (req, res) => {
    try {
        const response = await axios.post(
            'https://partner.onlytraffic.com/api/marketer?do=campaigns',
            {}, // Пустое тело, если оно требуется
            {
                headers: {
                    'api_auth_key': '55596-9C427-724C7-0A129'
                }
            }
        );

        res.json(response.data); // Возвращаем ответ от API
    } catch (error) {
        console.error('Ошибка при запросе к конечному API:', error.message);
        res.status(500).json({ message: 'Ошибка при запросе к API' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
