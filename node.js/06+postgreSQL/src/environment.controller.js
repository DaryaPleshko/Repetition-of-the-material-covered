const express = require('express');
const service = require('./environment.service');
const { buildResponse } = require('./helper/buildResponse');

class Controller {
    route = express.Router();

    constructor() {
        this.gettingEverything();
        this.gettingOne();
        this.createElement();
        this.updateElement();
        this.deleteElement();
    }
    
    gettingEverything = () => {
        this.route.get('/', async (request, response) => {
            try {
                const data = await service.getAllEnvironment();
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, error.message, 500);
            };
        });
    };

    gettingOne = () => {
        this.route.get('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const data = await service.getEnvironmentById(id);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, error.message, 500);
            };
        });
    };

    createElement = () => {
        this.route.post('/', async (request, response) => {
            try {
                const { label, category, priority } = request.body;
                const data = await service.createEnvironment(label, category, priority);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, error.message, 500);
            };
        });
    };

    updateElement = () => {
        this.route.put('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const { label, category, priority } = request.body;
                const data = await service.updateEnvironment(id, label, category, priority);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, error.message, 500);
            };
        });
    };

    deleteElement = () => {
        this.route.delete('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const data = await service.deleteEnvironment(id);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, error.message, 500);
            };
        });
    };
}

const controller = new Controller();
module.exports = controller.route;