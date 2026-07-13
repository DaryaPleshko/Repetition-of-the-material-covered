import { courseRepository } from '../repository/Course.repository';
import { CourseDTO, CreateCourseDTO, UpdateCourseDTO } from '../models/Course.model';

export class CourseService {
  async getAllCourses(): Promise<CourseDTO[]> {
    return await courseRepository.getAllCourses();
  }

  async getCourseById(id: string): Promise<CourseDTO> {
    const course = await courseRepository.getCourseById(id);
    if (!course) {
      throw new Error('Курс не найден');
    }
    return course;
  }

  async createCourse(courseData: CreateCourseDTO): Promise<CourseDTO> {
    return await courseRepository.createCourse(courseData);
  }

  async updateCourse(id: string, updates: UpdateCourseDTO): Promise<CourseDTO> {
    return await courseRepository.updateCourse(id, updates);
  }

  async deleteCourse(id: string): Promise<CourseDTO> {
    return await courseRepository.deleteCourse(id);
  }
}

export const courseService = new CourseService();
