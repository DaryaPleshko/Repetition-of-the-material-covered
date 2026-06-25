const express = require('express');
const taskService = require('../services/task.service');
const { buildResponse } = require('../helper/buildResponse');

class TaskController {
    taskRoute = express.Router();

    constructor() {
        this.getAllTasks();
        this.getTaskById();
        this.createTask();
        this.updateTask();
        this.partialUpdateTask();
        this.deleteTask();
    }

    getAllTasks = () => {
        this.taskRoute.get('/', async (request, response) => {
            try {
                const data = await taskService.getAllTask();
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 500);
            }
        });
    }

    getTaskById = () => {
        this.taskRoute.get('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const data = await taskService.getTaskById(id);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 404);
            }
        });
    }

    createTask = () => {
        this.taskRoute.post('/', async (request, response) => {
            try {
                const { task, user_id } = request.body; 
                const data = await taskService.createdTask(task, user_id);
                buildResponse(response, data, 201);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    updateTask = () => {
        this.taskRoute.put('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const { task } = request.body;
                const data = await taskService.updateTaskById(id, task);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    partialUpdateTask = () => {
        this.taskRoute.patch('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const updates = request.body;
                const data = await taskService.partialUpdateTaskById(id, updates);
                buildResponse(response, data, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 400);
            }
        });
    }

    deleteTask = () => {
        this.taskRoute.delete('/:id', async (request, response) => {
            try {
                const { id } = request.params;
                const data = await taskService.deleteTaskById(id);
                buildResponse(response, { message: 'Задача удалена', data }, 200);
            } catch (error) {
                buildResponse(response, { error: error.message }, 404);
            }
        });
    }
}

const taskController = new TaskController();
module.exports = taskController.taskRoute;