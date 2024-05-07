const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.API_PORT;

app.get('/', (req, res) => {
  res.send(process.env.RESPONSE_TEXT); 
});

if (require.main === module) {
  const server = app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    console.log(`Response text is: ${process.env.RESPONSE_TEXT}`);
  });
}

module.exports = app;
