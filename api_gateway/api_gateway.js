const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const PORT = 10000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());

const inventoryService = 'http://localhost:10001'

app.get('/books', (req, res) => {
        request.get({
            headers: {'content-type': 'application/json'},
            url: `${inventoryService}/books`
        })
        .on('error', function(err) {
            console.log(err)
        })
        .on('data', function(data) {
            res.send(data);
        })
});

app.listen(PORT, HOST);
console.log(`API gateway running on http://${HOST}:${PORT}`);