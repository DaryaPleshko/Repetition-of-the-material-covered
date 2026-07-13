import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './config/database.config';
import { authController } from './controllers/Auth.controller';
import { userController } from './controllers/User.controller';
import { courseController } from './controllers/Course.controller';
import { lessonController } from './controllers/Lesson.controller';
import { studentProgressController } from './controllers/StudentProgress.controller';

export class Middleware {
  public app: Application = express();

  constructor() {
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares(): void {
    const corsOptions = {
      origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    };

    this.app.use(cors(corsOptions));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    this.app.get('/health', (req: Request, res: Response) => {
      res.status(200).json({ status: 'OK', message: 'Server is running' });
    });

    this.app.use('/api/auth', authController.router);
    this.app.use('/api/users', userController.router);
    this.app.use('/api/courses', courseController.router);
    this.app.use('/api/lessons', lessonController.router);
    this.app.use('/api/progress', studentProgressController.router);
  }

  private initializeErrorHandling(): void {
    this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.error('Error:', error);
      res.status(400).json({
        message: 'Ошибка обработки запроса',
        error: error.message
      });
    });

    this.app.use((req: Request, res: Response) => {
      res.status(404).json({
        message: 'Маршрут не найден',
        error: `Cannot ${req.method} ${req.path}`
      });
    });
  }

  public async initializeDatabase(): Promise<void> {
    await connectDB();
  }
}

export const middleware = new Middleware();
export default middleware.app;
