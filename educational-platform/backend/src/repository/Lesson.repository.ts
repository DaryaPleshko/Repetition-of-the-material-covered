import { BaseRepository } from './Base.repository';
import { Lesson, LessonDTO, CreateLessonDTO, UpdateLessonDTO } from '../models/Lesson.model';

export class LessonRepository extends BaseRepository {
  async getLessonsByCourseId(courseId: string): Promise<LessonDTO[]> {
    const sql = `
      SELECT id, course_id, title, description, content, order_index, duration_minutes 
      FROM lessons 
      WHERE course_id = $1 
      ORDER BY order_index ASC
    `;
    return this.executeQuery<LessonDTO>(sql, [courseId]);
  }

  async getLessonById(id: string): Promise<LessonDTO | null> {
    const sql = 'SELECT id, course_id, title, description, content, order_index, duration_minutes FROM lessons WHERE id = $1';
    return this.executeOne<LessonDTO>(sql, [id]);
  }

  async createLesson(lessonData: CreateLessonDTO): Promise<LessonDTO> {
    const sql = `
      INSERT INTO lessons (course_id, title, description, content, order_index, duration_minutes) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING id, course_id, title, description, content, order_index, duration_minutes
    `;
    const params = [
      lessonData.course_id,
      lessonData.title,
      lessonData.description || null,
      lessonData.content || null,
      lessonData.order_index,
      lessonData.duration_minutes || null
    ];
    const result = await this.executeOne<LessonDTO>(sql, params);
    if (!result) {
      throw new Error('Ошибка при создании урока');
    }
    return result;
  }

  async updateLesson(id: string, updates: UpdateLessonDTO): Promise<LessonDTO> {
    const updateFields: string[] = [];
    const params: any[] = [];
    let paramIndex = 1;

    if (updates.title !== undefined) {
      updateFields.push(`title = $${paramIndex++}`);
      params.push(updates.title);
    }
    if (updates.description !== undefined) {
      updateFields.push(`description = $${paramIndex++}`);
      params.push(updates.description);
    }
    if (updates.content !== undefined) {
      updateFields.push(`content = $${paramIndex++}`);
      params.push(updates.content);
    }
    if (updates.order_index !== undefined) {
      updateFields.push(`order_index = $${paramIndex++}`);
      params.push(updates.order_index);
    }
    if (updates.duration_minutes !== undefined) {
      updateFields.push(`duration_minutes = $${paramIndex++}`);
      params.push(updates.duration_minutes);
    }

    if (updateFields.length === 0) {
      throw new Error('Нет данных для обновления');
    }

    params.push(id);
    const sql = `
      UPDATE lessons 
      SET ${updateFields.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING id, course_id, title, description, content, order_index, duration_minutes
    `;

    const result = await this.executeOne<LessonDTO>(sql, params);
    if (!result) {
      throw new Error('Урок не найден');
    }
    return result;
  }

  async deleteLesson(id: string): Promise<LessonDTO> {
    const sql = `
      DELETE FROM lessons 
      WHERE id = $1 
      RETURNING id, course_id, title, description, content, order_index, duration_minutes
    `;
    const result = await this.executeOne<LessonDTO>(sql, [id]);
    if (!result) {
      throw new Error('Урок не найден');
    }
    return result;
  }
}

export const lessonRepository = new LessonRepository();
