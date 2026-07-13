import { apiClient } from './apiClient';

export interface LoginRequest {
  email: string;
  pwd: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  course: string;
  pwd: string;
  pwdConfirmation: string;
}

export interface AuthResponse {
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      course_id: string | null;
      created_at: string;
    };
    token: string;
  };
}

export const authApi = {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/auth', credentials);
    
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
    }
    
    if (response.data?.user) {
      localStorage.setItem('currentUser', JSON.stringify({
        id: response.data.user.id,
        email: response.data.user.email,
        name: response.data.user.name,
        courseId: response.data.user.course_id
      }));
    }
    
    return response;
  },

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/reg', userData);
    
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
    }
    
    if (response.data?.user) {
      localStorage.setItem('currentUser', JSON.stringify({
        id: response.data.user.id,
        email: response.data.user.email,
        name: response.data.user.name,
        courseId: response.data.user.course_id
      }));
    }
    
    return response;
  },

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  },

  getCurrentUser(): any {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
};
