const express = require('express');
const userService = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse');
const jwt = require('jsonwebtoken');

class UserController {
    route = express.Router();

    constructor() {
        this.getAllUsers();
        this.getUserById();
        this.registration();
        this.authorization();
        this.updateUser();
        this.partialUpdateUser();
        this.deleteUser();
    }

    createToken = (data) => {
        const secret = 'qsdgb35vgb77739jjjmpld000ksndklo99934i93idmdckdmjic';
        return jwt.sign({ user: data }, secret);
    }

    getAllUsers = () => {
        this.route.get('/', async (request, response) => {
            try {
                const data = await userService.getAllUsers();
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 500);
            }
        });
    }

    getUserById = () => {
        this.route.get('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const data = await userService.getUserById(id);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 404);
            }
        });
    }

    registration = () => {
        this.route.post('/reg', async (request, response) => {
            try {
                const { name, surname, email, pwd } = request.body;
                
                const data = await userService.registration(name, surname, email, pwd);
                const token = this.createToken(data);
                
                response.setHeader('Authorization', `Bearer ${token}`);
                response.setHeader('Authorization', `Bearer ${token}`);
                buildResponse(response, { message: 'Регистрация успешна', user: data }, 201);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    };

    authorization = () => {
        this.route.post('/auth', async (request, response) => {
            try {
                const { email, pwd } = request.body;

                const data = await userService.authorization(email, pwd);
                const token = this.createToken(data);

                response.setHeader('Authorization', `Bearer ${token}`);
                buildResponse(response, { message: 'Авторизация успешна', user: data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    };

    updateUser = () => {
        this.route.put('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const { name, surname, email, pwd } = request.body;
                const data = await userService.updateUser(id, name, surname, email, pwd);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    partialUpdateUser = () => {
        this.route.patch('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const updates = request.body;
                const data = await userService.partialUpdateUser(id, updates);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    deleteUser = () => {
        this.route.delete('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const data = await userService.deleteUser(id);
                buildResponse(response, { message: 'Пользователь удален', data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 404);
            }
        });
    }
}

module.exports = new UserController().route;