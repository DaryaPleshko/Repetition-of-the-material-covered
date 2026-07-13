import { BaseRepository } from './Base.repository';
import { User, UserDTO, UpdateUserDTO } from '../models/User.model';

export class UserRepository extends BaseRepository {
  async getAllUsers(): Promise<UserDTO[]> {
    const sql = 'SELECT id, name, email, course_id, created_at FROM users ORDER BY created_at DESC';
    return this.executeQuery<UserDTO>(sql);
  }

  async getUserById(id: string): Promise<UserDTO | null> {
    const sql = 'SELECT id, name, email, course_id, created_at FROM users WHERE id = $1';
    return this.executeOne<UserDTO>(sql, [id]);
  }

  async updateUserById(
    id: string,
    name?: string,
    surname?: string,
    email?: string,
    pwd?: string
  ): Promise<UserDTO> {
    const updates: string[] = [];
    const params: any[] = [];
    let paramIndex = 1;

    if (name) {
      updates.push(`name = $${paramIndex++}`);
      params.push(name);
    }
    if (surname) {
      updates.push(`surname = $${paramIndex++}`);
      params.push(surname);
    }
    if (email) {
      updates.push(`email = $${paramIndex++}`);
      params.push(email);
    }
    if (pwd) {
      updates.push(`pwd = $${paramIndex++}`);
      params.push(pwd);
    }

    if (updates.length === 0) {
      throw new Error('Нет данных для обновления');
    }

    params.push(id);
    const sql = `
      UPDATE users 
      SET ${updates.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING id, name, email, course_id, created_at
    `;

    const result = await this.executeOne<UserDTO>(sql, params);
    if (!result) {
      throw new Error('Пользователь не найден');
    }
    return result;
  }

  async partialUpdateUserById(id: string, updates: UpdateUserDTO): Promise<UserDTO> {
    const updateFields: string[] = [];
    const params: any[] = [];
    let paramIndex = 1;

    if (updates.name !== undefined) {
      updateFields.push(`name = $${paramIndex++}`);
      params.push(updates.name);
    }
    if (updates.email !== undefined) {
      updateFields.push(`email = $${paramIndex++}`);
      params.push(updates.email);
    }
    if (updates.course_id !== undefined) {
      updateFields.push(`course_id = $${paramIndex++}`);
      params.push(updates.course_id);
    }
    if (updates.pwd !== undefined) {
      updateFields.push(`pwd = $${paramIndex++}`);
      params.push(updates.pwd);
    }

    if (updateFields.length === 0) {
      throw new Error('Нет данных для обновления');
    }

    params.push(id);
    const sql = `
      UPDATE users 
      SET ${updateFields.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING id, name, email, course_id, created_at
    `;

    const result = await this.executeOne<UserDTO>(sql, params);
    if (!result) {
      throw new Error('Пользователь не найден');
    }
    return result;
  }

  async deleteUserById(id: string): Promise<UserDTO> {
    const sql = `
      DELETE FROM users 
      WHERE id = $1 
      RETURNING id, name, email, course_id, created_at
    `;
    const result = await this.executeOne<UserDTO>(sql, [id]);
    if (!result) {
      throw new Error('Пользователь не найден');
    }
    return result;
  }
}

export const userRepository = new UserRepository();
