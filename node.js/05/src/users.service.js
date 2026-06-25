const fs = require('fs');

class Service {
    readData = () => {
        const json = fs.readFileSync('./src/data.json');
        const data = JSON.parse(json);
        return data;
    }

    writeData = (data) => {
        fs.writeFileSync('./src/data.json', JSON.stringify(data));
    }

    getAllUsers = () => {
        const data = this.readData();
        if (!data.length) throw new Error('Данные отсутствуют');
        return data;
    }

    getUserById = (id) => {
        const data = this.readData();
        const search = data.filter(el => el.id === Number(id));
        if (!data.length) throw new Error('Данные отсутствуют');
        if (!search.length) throw new Error(`id = ${id} не найдено`);
        return search;
    }

    createUser = (name, surname, email, pwd) => {
        const data = this.readData();
        data.push({ id: data.length + 1, name, surname, email, pwd });
        this.writeData(data);
        return data;
    }

    updateUser = (id, name, surname, email, pwd) => {
        const data = this.readData();
        const index = data.findIndex(el => el.id === Number(id));
        if (index === -1) throw new Error('Элемент не найден');

        data[index] = { id: Number(id), name, surname, email, pwd };
        return data;
    }

    deleteUser = (id) => {
        const data = this.readData();

        const index = data.findIndex(el => el.id === Number(id));
        if (index === -1) throw new Error('Элемент не найден');

        data.splice(index, 1);
        this.writeData(data);
        return data;
    }
}
const service = new Service();
module.exports = service;