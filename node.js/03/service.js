const fs = require('fs');

const readData = () => {
    const json = fs.readFileSync('./data.json');
    const data = JSON.parse(json);
    return data;
}

const writeData = (data) => {
    fs.writeFileSync('./data.json', JSON.stringify(data));
};

const getAllElement = () => {
    const data = readData();
    if (data.length === 0) throw new Error('Данные отсутствуют');
    return data;
};

const getElementById = (id) => {
    const data = readData();
    const valueById = data.filter(el => el.id === id);
    if (!valueById) throw new Error('Элемент не найден');
    return valueById;
};

const createElement = (label, category, priority) => {
    const data = readData();

    const id = label.toLowerCase();
    if (data.some(el => el.id === id)) throw new Error(`Элемент с id "${id}" уже существует`);

    data.push({ id, label, category, priority });
    writeData(data);
    return data;
};

const updateElementById = (id, label, category, priority) => {
    const data = readData();

    const index = data.findIndex(el => el.id === id);
    if (index === -1) throw new Error('Элемент не найден');

    const updatedElement = { ...data[index], label, category, priority };

    data[index] = updatedElement;
    writeData(data);

    return updatedElement;
};

const deleteElementById = (id) => {
    const data = readData();

    const index = data.findIndex(el => el.id === id);
    if (index === -1) throw new Error('Элемент не найден');

    data.splice(index, 1);
    writeData(data);
    return data;
};

module.exports = {
    getAllElement,
    getElementById,
    createElement,
    updateElementById,
    deleteElementById
};

