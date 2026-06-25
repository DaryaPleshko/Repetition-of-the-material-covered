require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/users.controller');

class Middleware {
    app = express();
    constructor() {
        const PORT = process.env.PORT || 3000;
        this.app.use(bodyParser.json());
        this.app.use('/users', router);
        this.app.use((error, request, response, next) => response.status(400).send(error.message));
        this.app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
    }
}

new Middleware();