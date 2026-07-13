export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: string | null;
  order_index: number;
  duration_minutes: number | null;
  created_at: Date;
  updated_at: Date;
}

export interface LessonDTO {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: string | null;
  order_index: number;
  duration_minutes: number | null;
}

export interface CreateLessonDTO {
  course_id: string;
  title: string;
  description?: string;
  content?: string;
  order_index: number;
  duration_minutes?: number;
}

export interface UpdateLessonDTO {
  title?: string;
  description?: string;
  content?: string;
  order_index?: number;
  duration_minutes?: number;
}
