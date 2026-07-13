import { BaseRepository } from './Base.repository';
import { 
  StudentProgress, 
  StudentProgressDTO, 
  CreateStudentProgressDTO, 
  UpdateStudentProgressDTO,
  UserProgressSummary 
} from '../models/StudentProgress.model';

export class StudentProgressRepository extends BaseRepository {
  async getProgressByUserId(userId: string): Promise<StudentProgressDTO[]> {
    const sql = `
      SELECT id, user_id, lesson_id, is_completed, completed_at, last_accessed_at 
      FROM student_progress 
      WHERE user_id = $1 
      ORDER BY last_accessed_at DESC
    `;
    return this.executeQuery<StudentProgressDTO>(sql, [userId]);
  }

  async getProgressByLessonId(lessonId: string): Promise<StudentProgressDTO[]> {
    const sql = `
      SELECT id, user_id, lesson_id, is_completed, completed_at, last_accessed_at 
      FROM student_progress 
      WHERE lesson_id = $1 
      ORDER BY last_accessed_at DESC
    `;
    return this.executeQuery<StudentProgressDTO>(sql, [lessonId]);
  }

  async getUserProgressForLesson(userId: string, lessonId: string): Promise<StudentProgressDTO | null> {
    const sql = `
      SELECT id, user_id, lesson_id, is_completed, completed_at, last_accessed_at 
      FROM student_progress 
      WHERE user_id = $1 AND lesson_id = $2
    `;
    return this.executeOne<StudentProgressDTO>(sql, [userId, lessonId]);
  }

  async createProgress(progressData: CreateStudentProgressDTO): Promise<StudentProgressDTO> {
    const sql = `
      INSERT INTO student_progress (user_id, lesson_id, is_completed, last_accessed_at) 
      VALUES ($1, $2, false, CURRENT_TIMESTAMP) 
      RETURNING id, user_id, lesson_id, is_completed, completed_at, last_accessed_at
    `;
    const result = await this.executeOne<StudentProgressDTO>(sql, [progressData.user_id, progressData.lesson_id]);
    if (!result) {
      throw new Error('Ошибка при создании прогресса');
    }
    return result;
  }

  async updateProgress(id: string, updates: UpdateStudentProgressDTO): Promise<StudentProgressDTO> {
    const updateFields: string[] = [];
    const params: any[] = [];
    let paramIndex = 1;

    if (updates.is_completed !== undefined) {
      updateFields.push(`is_completed = $${paramIndex++}`);
      params.push(updates.is_completed);
      if (updates.is_completed && !updates.completed_at) {
        updateFields.push(`completed_at = $${paramIndex++}`);
        params.push(new Date());
      }
    }
    if (updates.completed_at !== undefined) {
      updateFields.push(`completed_at = $${paramIndex++}`);
      params.push(updates.completed_at);
    }
    if (updates.last_accessed_at !== undefined) {
      updateFields.push(`last_accessed_at = $${paramIndex++}`);
      params.push(updates.last_accessed_at);
    } else {
      updateFields.push(`last_accessed_at = $${paramIndex++}`);
      params.push(new Date());
    }

    if (updateFields.length === 0) {
      throw new Error('Нет данных для обновления');
    }

    params.push(id);
    const sql = `
      UPDATE student_progress 
      SET ${updateFields.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING id, user_id, lesson_id, is_completed, completed_at, last_accessed_at
    `;

    const result = await this.executeOne<StudentProgressDTO>(sql, params);
    if (!result) {
      throw new Error('Прогресс не найден');
    }
    return result;
  }

  async toggleLessonCompletion(userId: string, lessonId: string): Promise<StudentProgressDTO> {
    const existing = await this.getUserProgressForLesson(userId, lessonId);
    
    if (!existing) {
      return this.createProgress({ user_id: userId, lesson_id: lessonId });
    }

    const newStatus = !existing.is_completed;
    return this.updateProgress(existing.id, { 
      is_completed: newStatus,
      completed_at: newStatus ? new Date() : undefined 
    });
  }

  async getUserProgressSummary(userId: string, courseId: string): Promise<UserProgressSummary> {
    const sql = `
      WITH 
      total_lessons AS (
        SELECT COUNT(*) as count 
        FROM lessons 
        WHERE course_id = $1
      ),
      completed_lessons AS (
        SELECT COUNT(*) as count, 
               array_agg(sp.lesson_id) as lesson_ids
        FROM student_progress sp
        JOIN lessons l ON sp.lesson_id = l.id
        WHERE sp.user_id = $2 
          AND l.course_id = $1 
          AND sp.is_completed = true
      )
      SELECT 
        $2 as user_id,
        $1 as course_id,
        (SELECT count FROM total_lessons) as total_lessons,
        COALESCE((SELECT count FROM completed_lessons), 0) as completed_lessons,
        CASE 
          WHEN (SELECT count FROM total_lessons) > 0 
          THEN ROUND(
            COALESCE((SELECT count FROM completed_lessons), 0)::numeric / 
            (SELECT count FROM total_lessons)::numeric * 100, 
            2
          )
          ELSE 0 
        END as progress_percentage,
        COALESCE((SELECT lesson_ids FROM completed_lessons), ARRAY[]::uuid[]) as completed_lesson_ids
    `;
    
    const result = await this.executeOne<UserProgressSummary>(sql, [courseId, userId]);
    if (!result) {
      throw new Error('Ошибка при получении сводки прогресса');
    }
    return result;
  }

  async deleteProgress(id: string): Promise<StudentProgressDTO> {
    const sql = `
      DELETE FROM student_progress 
      WHERE id = $1 
      RETURNING id, user_id, lesson_id, is_completed, completed_at, last_accessed_at
    `;
    const result = await this.executeOne<StudentProgressDTO>(sql, [id]);
    if (!result) {
      throw new Error('Прогресс не найден');
    }
    return result;
  }
}

export const studentProgressRepository = new StudentProgressRepository();
