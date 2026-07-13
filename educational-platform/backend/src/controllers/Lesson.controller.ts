import { Router, Request, Response } from 'express';
import { lessonService } from '../services/Lesson.service';
import { ApiResponse } from '../models/ApiResponse.model';

export class LessonController {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/course/:courseId', this.getLessonsByCourseId.bind(this));
    this.router.get('/:id', this.getLessonById.bind(this));
    this.router.post('/', this.createLesson.bind(this));
    this.router.put('/:id', this.updateLesson.bind(this));
    this.router.delete('/:id', this.deleteLesson.bind(this));
  }

  private async getLessonsByCourseId(req: Request, res: Response): Promise<void> {
    try {
      const { courseId } = req.params;
      const data = await lessonService.getLessonsByCourseId(courseId as string);
      
      const response: ApiResponse = {
        message: 'Получение уроков курса успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения уроков',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async getLessonById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await lessonService.getLessonById(id as string);
      
      const response: ApiResponse = {
        message: 'Получение урока успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения урока',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async createLesson(req: Request, res: Response): Promise<void> {
    try {
      const lessonData = req.body;
      const data = await lessonService.createLesson(lessonData);
      
      const response: ApiResponse = {
        message: 'Создание урока успешно',
        data
      };
      
      res.status(201).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка создания урока',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async updateLesson(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updates = req.body;
      
      const data = await lessonService.updateLesson(id as string, updates);
      
      const response: ApiResponse = {
        message: 'Обновление урока успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка обновления урока',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async deleteLesson(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await lessonService.deleteLesson(id as string);
      
      const response: ApiResponse = {
        message: 'Удаление урока успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка удаления урока',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }
}

export const lessonController = new LessonController();
