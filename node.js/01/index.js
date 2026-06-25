const express = require('express');
const { data } = require('./service');

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.send(data));

app.get('/:id', (request, response) => {
    const id = Number(request.params.id);
    const filter = data.filter(el => el.id === id);
    (filter.length > 0) ? response.send(filter) : response.status(404).send('объект не найден');
});

app.post('/add', (request, response) => {
    const newItem = request.body;
    if (!newItem || !newItem.id || !newItem.name) response.status(404).send('Неверные данные');
    data.push(newItem);
    response.status(201).send(data);
});

app.put('/:id', (request, response) => {
    const id = Number(request.params.id);
    const newItem = request.body;

    if (!newItem || !newItem.id || !newItem.name) return response.status(400).send('Неверные данные');

    const index = data.findIndex(el => el.id === id);
    if (index === -1) return response.status(404).send('Объект не найден');

    data[index] = { ...data[index], ...newItem, id: id };
    response.status(200).json(data);
});

app.delete('/:id', (request, response) => {
    const id = Number(request.params.id);
    const index = data.findIndex(el => el.id === id);

    if (index === -1) return response.status(404).send('Объект не найден');

    const deletedItem = data[index];
    data.splice(index, 1);

    response.status(200).json({
        message: 'Объект успешно удален',
        deletedItem: deletedItem,
        remainingData: data
    });
});

app.listen(3000, () => {
    console.log('the server is ready');
});