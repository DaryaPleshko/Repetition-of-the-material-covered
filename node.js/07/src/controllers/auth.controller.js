const express = require('express');
const authService = require('../services/auth.service');
const { buildResponse } = require('../helper/buildResponse');

class AuthController {
    authRoute = express.Router();

    constructor() {
        this.registration();
        this.authorization();
    }

    registration = () => {
        this.authRoute.post('/reg', async (request, response) => {
            try {
                const { name, surname, email, pwd } = request.body;
                const data = await authService.registration(name, surname, email, pwd);

                buildResponse(response, { message: 'Регистрация успешна', user: data }, 201);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    };

    authorization = () => {
        this.authRoute.post('/auth', async (request, response) => {
            try {
                const { email, pwd } = request.body;
                const data = await authService.authorization(email, pwd);

                buildResponse(response, { message: 'Авторизация успешна', user: data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    };
}

const authController = new AuthController();
module.exports = authController.authRoute;