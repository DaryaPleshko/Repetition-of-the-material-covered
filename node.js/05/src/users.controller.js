const express = require('express');
const service = require('./users.service');
const res = require('../helper/buildResponse');

class Controller {
    router = express.Router();
    constructor() {
        this.getAll();
        this.getById();
        this.create();
        this.update();
        this.delete();
    }

    checkRequest = (request, response, next) => {
        const { name, surname, email, pwd } = request.body;
        if (!name || !surname || !email || !pwd) throw new Error('Данные не заполнены полностью');
        next();
    }

    getAll = () => {
        this.router.get('/', (request, response) => {
            try {
                res.success(response, service.getAllUsers());
            } catch (error) {
                res.error(response, error.message);
            }
        });
    }

    getById = () => {
        this.router.get('/:id', (request, response) => {
            try {
                const { id } = request.params;
                res.success(response, service.getUserById(id));
            } catch (error) {
                res.error(response, error.message);
            }
        });
    }

    create = () => {
        this.router.post('/', this.checkRequest, (request, response) => {
            try {
                const { name, surname, email, pwd } = request.body;
                res.success(response, service.createUser(name, surname, email, pwd));
            } catch (error) {
                res.error(response, error.message);
            }
        });
    }

    update = () => {
        this.router.put('/:id', this.checkRequest, (request, response) => {
            try {
                const { id } = request.params;
                const { name, surname, email, pwd } = request.body;
                res.success(response, service.updateUser(id, name, surname, email, pwd));
            } catch (error) {
                res.error(response, error.message);
            }
        });
    }

    delete = () => {
        this.router.delete('/:id', (request, response) => {
            try {
                const { id } = request.params;
                res.success(response, service.deleteUser(id));
            } catch (error) {
                res.error(response, error.message);
            }
        });
    }
}

const controller = new Controller();
module.exports = controller.router;