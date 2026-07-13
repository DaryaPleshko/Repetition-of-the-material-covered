export interface User {
  id: string;
  name: string;
  email: string;
  pwd: string;
  course_id: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  course_id: string | null;
  created_at: Date;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  pwd: string;
  pwdConfirmation: string;
  course: string;
}

export interface LoginUserDTO {
  email: string;
  pwd: string;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  pwd?: string;
  course_id?: string;
}
