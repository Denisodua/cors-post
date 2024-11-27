const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

app.post('/api/proxy/campaigns', async (req, res) => {
  try {
      const response = await axios.post(
        'https://partner.onlytraffic.com/api/marketer?do=campaigns',
        {},
        {
          headers: {
            "Authorization": "B6C43-745C7-4F231-55596"
          }
        }
      );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error query build.' });
  }
});

app.listen(PORT, () => {
  console.log(`Start on port ${PORT}`);
});
