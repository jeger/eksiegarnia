const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const PORT = 10000;
const HOST = '0.0.0.0';
const app = express();

const inventoryService = 'http://inventory:10001';
const authService = 'http://auth:10010';
const shippingService = 'http://shipping:10002'
const ordersService = 'http://localhost:8080'

console.log("authService: " + authService);
const fetch = require("node-fetch");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.get('/books', (req, res) => {
  request.get({
      headers: req.headers,
      body: req.body,
      url: `${inventoryService}/books`,
      json: true
    })
    .on('error', function(err) {
      console.log(err);
    })
    .on('data', function(data) {
      console.log("sending data " + JSON.stringify(data));
      res.send(data);
    })
});

app.get('/shippings', (req, res) => {
  request.get({
      headers: req.headers,
      body: req.body,
      url: `${shippingService}/shippings`,
      json: true
    })
    .on('error', function(err) {
      console.log(err);
    })
    .on('data', function(data) {
      console.log("sending data " + JSON.stringify(data));
      res.send(data);
    })
});

app.post('/login', (loginReq, loginRes) => {
  console.log("/login");
  console.log(JSON.stringify(loginReq.body));

  fetch(`${authService}/login`, {
      method: 'post',
      body: JSON.stringify(loginReq.body),
      headers: loginReq.headers,
    })
    .then(res => res.json())
    .then(json => loginRes.send(json));
});

app.post('/orders', (orderReq, orderRes) => {
  console.log("/orders");
  console.log(JSON.stringify(orderReq.body));

  fetch(`${ordersService}/orders`, {
    method: 'post',
    body: JSON.stringify(orderReq.body),
    headers: orderReq.headers,
  })
  // .then(res => res.json())
  .then(json => orderRes.sendStatus(200));
});


app.listen(PORT, HOST);
console.log(`API gateway running on http://${HOST}:${PORT}`);
