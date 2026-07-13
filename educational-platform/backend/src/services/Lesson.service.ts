import { lessonRepository } from '../repository/Lesson.repository';
import { LessonDTO, CreateLessonDTO, UpdateLessonDTO } from '../models/Lesson.model';

export class LessonService {
  async getLessonsByCourseId(courseId: string): Promise<LessonDTO[]> {
    return await lessonRepository.getLessonsByCourseId(courseId);
  }

  async getLessonById(id: string): Promise<LessonDTO> {
    const lesson = await lessonRepository.getLessonById(id);
    if (!lesson) {
      throw new Error('Урок не найден');
    }
    return lesson;
  }

  async createLesson(lessonData: CreateLessonDTO): Promise<LessonDTO> {
    return await lessonRepository.createLesson(lessonData);
  }

  async updateLesson(id: string, updates: UpdateLessonDTO): Promise<LessonDTO> {
    return await lessonRepository.updateLesson(id, updates);
  }

  async deleteLesson(id: string): Promise<LessonDTO> {
    return await lessonRepository.deleteLesson(id);
  }
}

export const lessonService = new LessonService();
