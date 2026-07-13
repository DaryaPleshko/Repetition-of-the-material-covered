const userRepository = require('../repository/user.repository');

class UserService {
    getAllUsers = async () => {
        return await userRepository.getAllUserDB();
    }

    getUserById = async (id) => {
        return await userRepository.getUserByIdDB(id);
    }

    registration = async (name, surname, email, pwd) => {
        if (!name || !surname || !email || !pwd) throw new Error('Все поля обязательны: name, surname, email, pwd');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) throw new Error('Некорректный email');

        if (pwd.length < 6) throw new Error('Пароль должен содержать минимум 6 символов');

        const data = await userRepository.registrationDB(name, surname, email, pwd);
        return data;
    };

    authorization = async (email, pwd) => {
        if (!email || !pwd) throw new Error('Email и пароль обязательны');

        const data = await userRepository.authorizationDB(email, pwd);
        return data;
    };

    updateUser = async (id, name, surname, email, pwd) => {
        if (!name || !surname || !email || !pwd) throw new Error('Все поля обязательны');
        return await userRepository.updateUserDB(id, name, surname, email, pwd);
    }

    partialUpdateUser = async (id, updates) => {
        if (Object.keys(updates).length === 0) {
            throw new Error('Нет данных для обновления');
        }
        return await userRepository.partialUpdateUserDB(id, updates);
    }

    deleteUser = async (id) => {
        return await userRepository.deleteUserDB(id);
    }
}

const userService = new UserService();
module.exports = userService;