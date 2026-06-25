const express = require('express');
const router = express.Router();
const { getAllUsers, getAllUsersById, createUser, updateUserById, deleteUserById } = require('./service');

router.get('/', (request, response) => {
    try {
        response.status(200).send(getAllUsers());
    } catch (error) {
        response.status(400).send(error.message);
    }
});

router.get('/:id', (request, response) => {
    try {
        const { id } = request.params;
        response.status(200).send(getAllUsersById(id));
    } catch (error) {
        response.status(400).send(error.message);
    }
});

router.post('/', (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        response.status(200).send(createUser(name, surname, email, pwd));
    } catch (error) {
        response.status(400).send(error.message);
    }
});

router.put('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        response.status(200).send(updateUserById(id, name, surname, email, pwd));
    } catch (error) {
        response.status(400).send(error.message);
    }
});

router.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;
        response.status(200).send(deleteUserById(id));
    } catch (error) {
        response.status(400).send(error.message);
    }
});

module.exports = router;