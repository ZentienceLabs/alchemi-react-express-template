export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UserResponse {
  user: User;
  timestamp: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  timestamp: string;
}