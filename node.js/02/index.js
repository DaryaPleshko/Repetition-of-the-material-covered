const express = require('express');
const bodyParser = require('body-parser');

const { data } = require('./service');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    try {
        if (data.length === 0) throw new Error('Данные отсутствуют');
        response.status(200).send(data);
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.get('/:id', (request, response) => {
    try {
        const id = request.params.id;
        const item = data.find(el => el.id === id);
        if (!item) throw new Error('Элемент не найден');
        response.status(200).send(item);
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.post('/', (request, response) => {
    try {
        const { label, category, priority } = request.body;
        if (!label || !category || priority === undefined) throw new Error('Не все данные переданы. Требуются: label, category, priority');

        const isDuplicate = data.some(el => el.id.toLowerCase() === label.toLowerCase());
        if (isDuplicate) throw new Error(`Элемент с label "${label}" уже существует`);

        const newItem = {
            id: label,
            label: label,
            category: category,
            priority: priority
        };
        data.push(newItem);
        response.status(201).send(data);
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.put('/:id', (request, response) => {
    try {
        const id = request.params.id;
        const { label, category, priority } = request.body;
        if (!label || !category || priority === undefined) throw new Error('Не все данные переданы. Требуются: label, category, priority');

        const index = data.findIndex(el => el.id === id);
        if (index === -1) throw new Error('Объект не найден');

        const duplicateIndex = data.findIndex(el => el.id.toLowerCase() === label.toLowerCase() && el.id !== id);
        if (duplicateIndex !== -1) throw new Error('Элемент с таким label уже существует');

        data[index] = {
            ...data[index],
            id: id,
            label: label,
            category: category,
            priority: Number(priority)
        };

        response.status(200).send(data);
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.delete('/:id', (request, response) => {
    try {
        const id = request.params.id;

        const index = data.findIndex(el => el.id === id);
        if (index === -1) throw new Error('Объект не найден');

        const deletedItem = data[index];
        data.splice(index, 1);

        response.status(200).send({
            message: 'Объект успешно удален',
            deletedItem: deletedItem,
            remainingData: data
        });
    } catch (error) {
        response.status(400).send(error.message);
    }
});

app.listen('3000', () => {
    console.log('the server is ready');
});