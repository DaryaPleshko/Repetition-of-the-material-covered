const express = require('express');
const userService = require('../services/user.service'); 
const { buildResponse } = require('../helper/buildResponse');

class UserController {
    userRoute = express.Router();

    constructor() {
        this.getAllUsers();
        this.getUserById();
        this.updateUser();
        this.partialUpdateUser();
        this.deleteUser();
    }

    getAllUsers = () => {
        this.userRoute.get('/', async (request, response) => {
            try {
                const data = await userService.getAllUsers(); 
                buildResponse(response, { message: 'Получение всех элементов успешно', data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    getUserById = () => {
        this.userRoute.get('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const data = await userService.getUserById(id); 
                buildResponse(response, { message: 'Получение одного элемента успешно', data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    updateUser = () => {
        this.userRoute.put('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const { name, surname, email, pwd } = request.body;
                const data = await userService.updateUserById(id, name, surname, email, pwd); 
                buildResponse(response, { message: 'Обновление успешно', data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    partialUpdateUser = () => {
        this.userRoute.patch('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const updates = request.body;
                const data = await userService.partialUpdateUserById(id, updates); 
                buildResponse(response, { message: 'Частичное обновление успешно', data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    deleteUser = () => {
        this.userRoute.delete('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const data = await userService.deleteUserById(id); 
                buildResponse(response, { message: 'Удаление успешно', data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }
}

const userController = new UserController();
module.exports = userController.userRoute;