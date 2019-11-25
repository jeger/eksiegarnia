const PORT = 10010;

const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
const fs = require('fs');

class HandlerGenerator {
    login (req, res) {
        console.log("HALOO");
        console.log("request headers: " + JSON.stringify(req.headers));
        console.log("request body data: " + JSON.stringify(req.body));

        let username = req.body.username;
        let password = req.body.password;
        let mockedUsername = 'admin';
        let mockedPassword = 'password';
           
        var privateKEY  = fs.readFileSync('./private.key', 'utf8');           
        var signOptions = {
            issuer:  "iam",
            subject:  "orders",
            audience:  "customers",
            expiresIn:  "12h",
            algorithm:  "RS256"
           };

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                var token = jwt.sign({foo: 'bar'}, privateKEY, signOptions);
                return res.json({
                    success: true,
                    message: 'Authentication successful',
                    token: token
                }).send();
            } else {
                return res.sendStatus(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.send('username and/or password has not been provided. This could be due to wrong header/body in the http request.');
        }
        console.log("/login handler end");

    }
}

function main () {
    let app = express();
    let handlers = new HandlerGenerator();

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));

    console.log("hello world");
    app.post('/login', handlers.login);

    app.listen(PORT, () => console.log(`Auth service running on port: ${PORT}`));
}

main();