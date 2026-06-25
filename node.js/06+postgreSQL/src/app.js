const express = require('express');
const bodyParser = require('body-parser');
const route = require('./environment.controller');

class App {
    app = express();
    
    constructor() {
        this.middlewares();
    }
    
    middlewares = () => {
        this.app.use(bodyParser.json());
        this.app.use('/skills', route);
        this.app.use((error, request, response, next) => {
            response.status(400).send(error.message);
        });
    }
    
    getApp = () => this.app;
}

module.exports = new App().getApp();