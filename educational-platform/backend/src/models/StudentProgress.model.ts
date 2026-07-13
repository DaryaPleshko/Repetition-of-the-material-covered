export interface StudentProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  is_completed: boolean;
  completed_at: Date | null;
  last_accessed_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface StudentProgressDTO {
  id: string;
  user_id: string;
  lesson_id: string;
  is_completed: boolean;
  completed_at: Date | null;
  last_accessed_at: Date;
}

export interface CreateStudentProgressDTO {
  user_id: string;
  lesson_id: string;
}

export interface UpdateStudentProgressDTO {
  is_completed?: boolean;
  completed_at?: Date;
  last_accessed_at?: Date;
}

export interface UserProgressSummary {
  user_id: string;
  course_id: string;
  total_lessons: number;
  completed_lessons: number;
  progress_percentage: number;
  completed_lesson_ids: string[];
}
