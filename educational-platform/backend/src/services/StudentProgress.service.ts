import { studentProgressRepository } from '../repository/StudentProgress.repository';
import { 
  StudentProgressDTO, 
  CreateStudentProgressDTO, 
  UpdateStudentProgressDTO,
  UserProgressSummary 
} from '../models/StudentProgress.model';

export class StudentProgressService {
  async getProgressByUserId(userId: string): Promise<StudentProgressDTO[]> {
    return await studentProgressRepository.getProgressByUserId(userId);
  }

  async getProgressByLessonId(lessonId: string): Promise<StudentProgressDTO[]> {
    return await studentProgressRepository.getProgressByLessonId(lessonId);
  }

  async getUserProgressForLesson(userId: string, lessonId: string): Promise<StudentProgressDTO | null> {
    return await studentProgressRepository.getUserProgressForLesson(userId, lessonId);
  }

  async createProgress(progressData: CreateStudentProgressDTO): Promise<StudentProgressDTO> {
    return await studentProgressRepository.createProgress(progressData);
  }

  async updateProgress(id: string, updates: UpdateStudentProgressDTO): Promise<StudentProgressDTO> {
    return await studentProgressRepository.updateProgress(id, updates);
  }

  async toggleLessonCompletion(userId: string, lessonId: string): Promise<StudentProgressDTO> {
    return await studentProgressRepository.toggleLessonCompletion(userId, lessonId);
  }

  async getUserProgressSummary(userId: string, courseId: string): Promise<UserProgressSummary> {
    return await studentProgressRepository.getUserProgressSummary(userId, courseId);
  }

  async deleteProgress(id: string): Promise<StudentProgressDTO> {
    return await studentProgressRepository.deleteProgress(id);
  }
}

export const studentProgressService = new StudentProgressService();
