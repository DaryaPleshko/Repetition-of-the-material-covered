import { Router, Request, Response } from 'express';
import { studentProgressService } from '../services/StudentProgress.service';
import { ApiResponse } from '../models/ApiResponse.model';

export class StudentProgressController {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/user/:userId', this.getProgressByUserId.bind(this));
    this.router.get('/lesson/:lessonId', this.getProgressByLessonId.bind(this));
    this.router.get('/user/:userId/course/:courseId', this.getUserProgressSummary.bind(this));
    this.router.get('/user/:userId/lesson/:lessonId', this.getUserProgressForLesson.bind(this));
    this.router.post('/', this.createProgress.bind(this));
    this.router.put('/:id', this.updateProgress.bind(this));
    this.router.patch('/user/:userId/lesson/:lessonId/toggle', this.toggleLessonCompletion.bind(this));
    this.router.delete('/:id', this.deleteProgress.bind(this));
  }

  private async getProgressByUserId(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const data = await studentProgressService.getProgressByUserId(userId as string);
      
      const response: ApiResponse = {
        message: 'Получение прогресса пользователя успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения прогресса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async getProgressByLessonId(req: Request, res: Response): Promise<void> {
    try {
      const { lessonId } = req.params;
      const data = await studentProgressService.getProgressByLessonId(lessonId as string);
      
      const response: ApiResponse = {
        message: 'Получение прогресса урока успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения прогресса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async getUserProgressSummary(req: Request, res: Response): Promise<void> {
    try {
      const { userId, courseId } = req.params;
      const data = await studentProgressService.getUserProgressSummary(userId as string, courseId as string);
      
      const response: ApiResponse = {
        message: 'Получение сводки прогресса успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения сводки прогресса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async getUserProgressForLesson(req: Request, res: Response): Promise<void> {
    try {
      const { userId, lessonId } = req.params;
      const data = await studentProgressService.getUserProgressForLesson(userId as string, lessonId as string);
      
      const response: ApiResponse = {
        message: 'Получение прогресса урока пользователя успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения прогресса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async createProgress(req: Request, res: Response): Promise<void> {
    try {
      const progressData = req.body;
      const data = await studentProgressService.createProgress(progressData);
      
      const response: ApiResponse = {
        message: 'Создание прогресса успешно',
        data
      };
      
      res.status(201).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка создания прогресса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async updateProgress(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updates = req.body;
      
      const data = await studentProgressService.updateProgress(id as string, updates);
      
      const response: ApiResponse = {
        message: 'Обновление прогресса успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка обновления прогресса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async toggleLessonCompletion(req: Request, res: Response): Promise<void> {
    try {
      const { userId, lessonId } = req.params;
      const data = await studentProgressService.toggleLessonCompletion(userId as string, lessonId as string);
      
      const response: ApiResponse = {
        message: 'Переключение завершения урока успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка переключения завершения урока',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async deleteProgress(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await studentProgressService.deleteProgress(id as string);
      
      const response: ApiResponse = {
        message: 'Удаление прогресса успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка удаления прогресса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }
}

export const studentProgressController = new StudentProgressController();
