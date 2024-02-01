const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/doThings', async (req, res) => {
  try {
    const response = await axios.get('http://medsvc:3001/didThings');
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`bigsvc listening at http://localhost:${port}`);
});
