const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/user.controller');

class Middleware {
    app = express();

    constructor() {
        this.middlewares();
    }

    middlewares = () => {
        this.app.use(bodyParser.json());

        this.app.use('/user', route);

        this.app.use((error, request, response, next) => {
            response.status(400).send(error.message);
        });
    }

}

module.exports = new Middleware().app;
