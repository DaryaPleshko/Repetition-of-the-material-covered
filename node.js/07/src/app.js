const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./controllers/auth.controller');
const taskRoute = require('./controllers/task.controller');
const userRoute = require('./controllers/user.controller');

class Middleware {
    app = express();

    constructor() {
        this.middlewares();
    }

    middlewares = () => {
        this.app.use(bodyParser.json());
        
        this.app.use('/api', authRoute);
        this.app.use('/task', taskRoute);
        this.app.use('/user', userRoute);

        this.app.use((error, request, response, next) => {
            response.status(400).send(error.message);
        });
    }
}

module.exports = new Middleware().app;