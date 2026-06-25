const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/controller');

const app = express();

app.use(bodyParser.json());
app.use('/users', router);
app.use((error, request, response, next) => response.status(400).send(error.message));

app.listen('3000', () => console.log('the server is ready'));