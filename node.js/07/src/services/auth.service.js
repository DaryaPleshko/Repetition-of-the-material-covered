const authRepository = require('../repository/auth.repository');

class AuthService {
    registration = async (name, surname, email, pwd) => {
        if (!name || !surname || !email || !pwd)  throw new Error('Все поля обязательны: name, surname, email, pwd');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))throw new Error('Некорректный email');

        if (pwd.length < 6)  throw new Error('Пароль должен содержать минимум 6 символов');

        const data = await authRepository.registrationDB(name, surname, email, pwd);
        return data;
    };

    authorization = async (email, pwd) => {
        if (!email || !pwd)  throw new Error('Email и пароль обязательны');

        const data = await authRepository.authorizationDB(email, pwd);
        return data;
    };
}

const authService = new AuthService();
module.exports = authService;