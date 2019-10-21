// подключение express
const express = require("express")
const bodyParser = require('body-parser')
//криптография
const crypto = require('crypto')
const base64url = require('base64url')
// создаем объект приложения
const app = express()
console.log('app start')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static('dist'));

app.listen(5000)