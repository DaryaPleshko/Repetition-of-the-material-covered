import { Router, Request, Response } from 'express';
import { courseService } from '../services/Course.service';
import { ApiResponse } from '../models/ApiResponse.model';

export class CourseController {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.getAllCourses.bind(this));
    this.router.get('/:id', this.getCourseById.bind(this));
    this.router.post('/', this.createCourse.bind(this));
    this.router.put('/:id', this.updateCourse.bind(this));
    this.router.delete('/:id', this.deleteCourse.bind(this));
  }

  private async getAllCourses(req: Request, res: Response): Promise<void> {
    try {
      const data = await courseService.getAllCourses();
      
      const response: ApiResponse = {
        message: 'Получение всех курсов успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения курсов',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async getCourseById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await courseService.getCourseById(id as string);
      
      const response: ApiResponse = {
        message: 'Получение курса успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка получения курса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async createCourse(req: Request, res: Response): Promise<void> {
    try {
      const courseData = req.body;
      const data = await courseService.createCourse(courseData);
      
      const response: ApiResponse = {
        message: 'Создание курса успешно',
        data
      };
      
      res.status(201).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка создания курса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async updateCourse(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updates = req.body;
      
      const data = await courseService.updateCourse(id as string, updates);
      
      const response: ApiResponse = {
        message: 'Обновление курса успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка обновления курса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }

  private async deleteCourse(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await courseService.deleteCourse(id as string);
      
      const response: ApiResponse = {
        message: 'Удаление курса успешно',
        data
      };
      
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse = {
        message: 'Ошибка удаления курса',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      };
      res.status(400).json(response);
    }
  }
}

export const courseController = new CourseController();
