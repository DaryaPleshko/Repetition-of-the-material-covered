import { Router, Request, Response } from 'express';
import { authService } from '../services/Auth.service';
import { ApiResponse } from '../models/ApiResponse.model';
import jwt from 'jsonwebtoken';

export class AuthController {
  public router: Router = Router();
  private readonly JWT_SECRET: string = process.env.JWT_SECRET || 'hndhuenckkj666328e798hyushuvnw99jii0d';

  constructor() {
    this.initializeRoutes();
  }

  private createToken(data: any): string {
    return jwt.sign({ user: data }, this.JWT_SECRET, { expiresIn: '24h' });
  }

  private initializeRoutes(): void {
    this.router.post('/reg', this.registration.bind(this));
    this.router.post('/auth', this.authorization.bind(this));
  }

  private async registration(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, course, pwd, pwdConfirmation } = req.body;

      const data = await authService.registration(name, email, course, pwd, pwdConfirmation);
      const token = this.createToken(data);

      res.setHeader('Authorization', `Bearer ${token}`);
      
      const response: ApiResponse = {
        message: 'Регистрация успешна',
        data: { user: data, token }
      };
      
      res.status(201).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка регистрации',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async authorization(req: Request, res: Response): Promise<void> {
    try {
      const { email, pwd } = req.body;

      const data = await authService.authorization(email, pwd);
      const token = this.createToken(data);

      res.setHeader('Authorization', `Bearer ${token}`);
      
      const response: ApiResponse = {
        message: 'Авторизация успешна',
        data: { user: data, token }
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка авторизации',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }
}

export const authController = new AuthController();
