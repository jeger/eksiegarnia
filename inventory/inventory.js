const express = require('express');

const PORT = 10001;
const HOST = '0.0.0.0';

const app = express();

const books = [
  {id: 1, author: "Fyodor Dostoyevsky", title: "Crime and Punishment", amount: 4},
  {id: 2, author: "George Orwel", title: "1984", amount: 2},
  {id: 3, author: "J.R.R Tolkien", title: "Lord of The Rings", amount: 3}
];

app.get('/books', (req, res) => {
  console.log('Returning books list');
  res.send(books);
});

app.listen(PORT, HOST);
console.log(`Inventory service running on http://${HOST}:${PORT}`);