'use strict';

const PORT = 10001;
const HOST = '0.0.0.0';

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const fs = require('fs');


const books = [
  {id: 1, author: "Fyodor Dostoyevsky", title: "Crime and Punishment", amount: 4},
  {id: 2, author: "George Orwel", title: "1984", amount: 2},
  {id: 3, author: "J.R.R Tolkien", title: "Lord of The Rings", amount: 3}
];

app.get('/books', (req, res) => {
  
  const token = retrieveTokenFromRequest(req);

  var publicKEY  = fs.readFileSync('./public.key', 'utf8');

  var verifyOptions = {
    issuer:  "iam",
    subject:  "orders",
    audience:  "customers",
    expiresIn:  "12h",
    algorithm:  ["RS256"]
   };
   
  var legit = jwt.verify(token, publicKEY, verifyOptions, function(err, decoded) {
    if (err) {
      console.log("ERROR:");
      console.log(err);
      res.sendStatus(403);
    } else {
      console.log("DECODED: " + decoded);
      res.send(books);
    }
  });
  console.log("\nJWT verification result: " + JSON.stringify(legit));
});

app.listen(PORT, HOST);
console.log(`Inventory service running on http://${HOST}:${PORT}`);

function retrieveTokenFromRequest(req) {
  const authorization = req.header('Authorization');
  console.log("req.header(auth): " + authorization);
  if (authorization === null || typeof authorization === 'undefined') {
    return null;
  }
  const token = authorization.substr('JWT '.length);
  console.log("token: " + token);
  if (token === null | typeof token === 'undefined') {
    return null;
  }
  return token;
}
