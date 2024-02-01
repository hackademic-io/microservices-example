const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/didThings', async (req, res) => {
  try {
    const response = await axios.get('http://smallsvc:3002/moreThings');
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`medsvc listening at http://localhost:${port}`);
});
