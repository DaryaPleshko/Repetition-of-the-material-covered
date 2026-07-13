import { authRepository } from '../repository/Auth.repository';
import { UserDTO, CreateUserDTO, LoginUserDTO } from '../models/User.model';

export class AuthService {
  async registration(
    name: string,
    email: string,
    course: string,
    pwd: string,
    pwdConfirmation: string
  ): Promise<UserDTO> {
    if (!name || !email || !course || !pwd || !pwdConfirmation) {
      throw new Error('Все поля обязательны: name, email, course, pwd, pwdConfirmation');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Некорректный email');
    }

    if (pwd.length < 6) {
      throw new Error('Пароль должен содержать минимум 6 символов');
    }

    if (pwd !== pwdConfirmation) {
      throw new Error('Пароли должны совпадать');
    }

    return await authRepository.registrationDB(name, email, course, pwd, pwdConfirmation);
  }

  async authorization(email: string, pwd: string): Promise<UserDTO> {
    if (!email || !pwd) {
      throw new Error('Email и пароль обязательны');
    }

    return await authRepository.authorizationDB(email, pwd);
  }

  async findUserByEmail(email: string): Promise<UserDTO | null> {
    return await authRepository.findUserByEmail(email);
  }

  async findUserById(id: string): Promise<UserDTO | null> {
    return await authRepository.findUserById(id);
  }
}

export const authService = new AuthService();
