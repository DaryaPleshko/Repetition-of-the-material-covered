const userRepository = require('../repository/user.repository');

class UserService { 
    getAllUsers = async () => { 
        const data = await userRepository.getAllUsersDB(); 
        return data;
    }

    getUserById = async (id) => { 
        const data = await userRepository.getUserByIdDB(id); 
        return data;
    }

    updateUserById = async (id, name, surname, email, pwd) => { 
        if (!name || !surname || !email || !pwd) {
            throw new Error('Все поля обязательны: name, surname, email, pwd');
        }
        const data = await userRepository.updateUserByIdDB(id, name, surname, email, pwd); 
        return data;
    }

    partialUpdateUserById = async (id, updates) => { 
        if (Object.keys(updates).length === 0) {
            throw new Error('Нет данных для обновления');
        }
        const data = await userRepository.partialUpdateUserByIdDB(id, updates);
        return data;
    }

    deleteUserById = async (id) => { 
        const data = await userRepository.deleteUserByIdDB(id); 
        return data;
    }
}

const userService = new UserService(); 
module.exports = userService;