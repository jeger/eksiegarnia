const express = require('express');

const PORT = 10002;
const HOST = '0.0.0.0';

const app = express();

const shippings = [
  {id: 1, name: "DHL" },
  {id: 2, name: "UPS" }
];

app.get('/shippings', (req, res) => {
  console.log('Returning books list');
  res.send(shippings);
});

app.listen(PORT, HOST);
console.log(`Shipping service running on http://${HOST}:${PORT}`);