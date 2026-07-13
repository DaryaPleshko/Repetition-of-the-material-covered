export interface Course {
  id: string;
  name: string;
  description: string | null;
  icon_url: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface CourseDTO {
  id: string;
  name: string;
  description: string | null;
  icon_url: string | null;
}

export interface CreateCourseDTO {
  id: string;
  name: string;
  description?: string;
  icon_url?: string;
}

export interface UpdateCourseDTO {
  name?: string;
  description?: string;
  icon_url?: string;
}
