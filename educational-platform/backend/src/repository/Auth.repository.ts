import { PoolClient } from 'pg';
import bcrypt from 'bcrypt';
import { BaseRepository } from './Base.repository';
import { User, UserDTO } from '../models/User.model';

export class AuthRepository extends BaseRepository {
  private readonly SALT_ROUNDS = 8;

  async registrationDB(
    name: string,
    email: string,
    courseId: string,
    pwd: string,
    pwdConfirmation: string
  ): Promise<UserDTO> {
    return this.executeTransaction(async (client: PoolClient) => {
      const checkSql = 'SELECT * FROM users WHERE email = $1';
      const checkResult = await client.query(checkSql, [email]);
      
      if (checkResult.rows.length > 0) {
        throw new Error('Пользователь с таким email уже существует');
      }

      const hashedPwd = await bcrypt.hash(pwd, this.SALT_ROUNDS);

      const sql = `
        INSERT INTO users (name, email, course_id, pwd) 
        VALUES ($1, $2, $3, $4) 
        RETURNING id, name, email, course_id, created_at
      `;
      
      const result = await client.query(sql, [name, email, courseId, hashedPwd]);
      return result.rows[0] as UserDTO;
    });
  }

  async authorizationDB(email: string, pwd: string): Promise<UserDTO> {
    return this.executeTransaction(async (client: PoolClient) => {
      const sql = 'SELECT * FROM users WHERE email = $1';
      const result = await client.query(sql, [email]);

      if (result.rows.length === 0) {
        throw new Error('Пользователь не найден');
      }

      const user = result.rows[0] as User;

      const isPasswordValid = await bcrypt.compare(pwd, user.pwd);
      if (!isPasswordValid) {
        throw new Error('Неверный пароль');
      }

      const { pwd: _, ...userDTO } = user;
      return userDTO as UserDTO;
    });
  }

  async findUserByEmail(email: string): Promise<UserDTO | null> {
    const sql = 'SELECT id, name, email, course_id, created_at FROM users WHERE email = $1';
    return this.executeOne<UserDTO>(sql, [email]);
  }

  async findUserById(id: string): Promise<UserDTO | null> {
    const sql = 'SELECT id, name, email, course_id, created_at FROM users WHERE id = $1';
    return this.executeOne<UserDTO>(sql, [id]);
  }
}

export const authRepository = new AuthRepository();
