import { userRepository } from '../repository/User.repository';
import { UserDTO, UpdateUserDTO } from '../models/User.model';

export class UserService {
  async getAllUsers(): Promise<UserDTO[]> {
    return await userRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<UserDTO> {
    const user = await userRepository.getUserById(id);
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    return user;
  }

  async updateUserById(
    id: string,
    name?: string,
    surname?: string,
    email?: string,
    pwd?: string
  ): Promise<UserDTO> {
    return await userRepository.updateUserById(id, name, surname, email, pwd);
  }

  async partialUpdateUserById(id: string, updates: UpdateUserDTO): Promise<UserDTO> {
    return await userRepository.partialUpdateUserById(id, updates);
  }

  async deleteUserById(id: string): Promise<UserDTO> {
    return await userRepository.deleteUserById(id);
  }
}

export const userService = new UserService();
