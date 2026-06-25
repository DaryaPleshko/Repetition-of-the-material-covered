const fs = require('fs');

const readData = () => {
    const json = fs.readFileSync('./src/data.json');
    const data = JSON.parse(json);
    return data;
};

const writeData = (data) => {
    fs.writeFileSync('./src/data.json', JSON.stringify(data));
}

const getAllUsers = () => {
    const data = readData();
    if (!data.length) throw new Error('Данные отсутствуют');
    return data;
};

const getAllUsersById = (id) => {
    const data = readData();
    const searchData = data.filter(el => el.id === Number(id));
    if (!data.length) throw new Error('Данные отсутствуют');
    if (!searchData.length) throw new Error(`id = ${id} не найдено`);
    return searchData;
};

const createUser = (name, surname, email, pwd) => {
    const data = readData();
    if (!name || !surname || !email || !pwd) throw new Error('Данные не заполнены полностью');
    data.push({ id: data.length + 1, name, surname, email, pwd });
    writeData(data);
    return data;
};

const updateUserById = (id, name, surname, email, pwd) => {
    const data = readData();
    const index = data.findIndex(el => el.id === Number(id));
    if (index === -1) throw new Error('Элемент не найден');

    data[index] = { id: Number(id), name, surname, email, pwd };
    writeData(data);
    return data;
};

const deleteUserById = (id) => {
    const data = readData();
    const index = data.findIndex(el => el.id === Number(id));
    if (index === -1) throw new Error('Элемент не найден');

    data.splice(index, 1);
    writeData(data);
    return data;
};

module.exports = { getAllUsers, getAllUsersById, createUser, updateUserById, deleteUserById };