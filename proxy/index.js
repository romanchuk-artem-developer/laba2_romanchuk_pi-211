const express = require('express');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PROXY_PORT;
const apiUrl = process.env.API_URL;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Proxy server is listening at http://localhost:${port}`);
});
