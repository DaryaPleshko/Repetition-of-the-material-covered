import { BaseRepository } from './Base.repository';
import { Course, CourseDTO, CreateCourseDTO, UpdateCourseDTO } from '../models/Course.model';

export class CourseRepository extends BaseRepository {
  async getAllCourses(): Promise<CourseDTO[]> {
    const sql = 'SELECT id, name, description, icon_url FROM courses ORDER BY name';
    return this.executeQuery<CourseDTO>(sql);
  }

  async getCourseById(id: string): Promise<CourseDTO | null> {
    const sql = 'SELECT id, name, description, icon_url FROM courses WHERE id = $1';
    return this.executeOne<CourseDTO>(sql, [id]);
  }

  async createCourse(courseData: CreateCourseDTO): Promise<CourseDTO> {
    const sql = `
      INSERT INTO courses (id, name, description, icon_url) 
      VALUES ($1, $2, $3, $4) 
      RETURNING id, name, description, icon_url
    `;
    const params = [
      courseData.id,
      courseData.name,
      courseData.description || null,
      courseData.icon_url || null
    ];
    const result = await this.executeOne<CourseDTO>(sql, params);
    if (!result) {
      throw new Error('Ошибка при создании курса');
    }
    return result;
  }

  async updateCourse(id: string, updates: UpdateCourseDTO): Promise<CourseDTO> {
    const updateFields: string[] = [];
    const params: any[] = [];
    let paramIndex = 1;

    if (updates.name !== undefined) {
      updateFields.push(`name = $${paramIndex++}`);
      params.push(updates.name);
    }
    if (updates.description !== undefined) {
      updateFields.push(`description = $${paramIndex++}`);
      params.push(updates.description);
    }
    if (updates.icon_url !== undefined) {
      updateFields.push(`icon_url = $${paramIndex++}`);
      params.push(updates.icon_url);
    }

    if (updateFields.length === 0) {
      throw new Error('Нет данных для обновления');
    }

    params.push(id);
    const sql = `
      UPDATE courses 
      SET ${updateFields.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING id, name, description, icon_url
    `;

    const result = await this.executeOne<CourseDTO>(sql, params);
    if (!result) {
      throw new Error('Курс не найден');
    }
    return result;
  }

  async deleteCourse(id: string): Promise<CourseDTO> {
    const sql = `
      DELETE FROM courses 
      WHERE id = $1 
      RETURNING id, name, description, icon_url
    `;
    const result = await this.executeOne<CourseDTO>(sql, [id]);
    if (!result) {
      throw new Error('Курс не найден');
    }
    return result;
  }
}

export const courseRepository = new CourseRepository();
