const express = require('express');
const bodyParser = require('body-parser');
const { getAllElement, getElementById, createElement, updateElementById, deleteElementById } = require('./service');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    try {
        response.status(200).send(getAllElement());
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.get('/:id', (request, response) => {
    try {
        const id = request.params.id;
        response.status(200).send(getElementById(id));
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.post('/', (request, response) => {
    try {
        const { label, category, priority } = request.body;
        if (!label || !category || priority === undefined) throw new Error('Не все данные переданы. Требуются: label, category, priority');

        response.status(201).send(createElement(label, category, priority));
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.put('/:id', (request, response) => {
    try {
        const id = request.params.id;
        const { label, category, priority } = request.body;
        if (!label || !category || priority === undefined) throw new Error('Не все данные переданы. Требуются: label, category, priority');

        response.status(201).send(updateElementById(id, label, category, priority));
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.delete('/:id', (request, response) => {
    try {
        const id = request.params.id;

        response.status(201).send(deleteElementById(id));
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.listen('3000', () => {
    console.log('the server is ready');
});