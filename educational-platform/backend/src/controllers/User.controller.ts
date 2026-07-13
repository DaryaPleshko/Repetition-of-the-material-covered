import { Router, Request, Response } from 'express';
import { userService } from '../services/User.service';
import { ApiResponse } from '../models/ApiResponse.model';

export class UserController {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.getAllUsers.bind(this));
    this.router.get('/:id', this.getUserById.bind(this));
    this.router.put('/:id', this.updateUser.bind(this));
    this.router.patch('/:id', this.partialUpdateUser.bind(this));
    this.router.delete('/:id', this.deleteUser.bind(this));
  }

  private async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const data = await userService.getAllUsers();
      
      const response: ApiResponse = {
        message: 'Получение всех пользователей успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения пользователей',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await userService.getUserById(id as string);
      
      const response: ApiResponse = {
        message: 'Получение пользователя успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения пользователя',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, surname, email, pwd } = req.body;
      
      const data = await userService.updateUserById(id as string, name, surname, email, pwd);
      
      const response: ApiResponse = {
        message: 'Обновление пользователя успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка обновления пользователя',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async partialUpdateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updates = req.body;
      
      const data = await userService.partialUpdateUserById(id as string, updates);
      
      const response: ApiResponse = {
        message: 'Частичное обновление пользователя успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка частичного обновления пользователя',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await userService.deleteUserById(id as string);
      
      const response: ApiResponse = {
        message: 'Удаление пользователя успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка удаления пользователя',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }
}

export const userController = new UserController();
