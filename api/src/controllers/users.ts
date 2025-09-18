import { Request, Response } from 'express';
import { User } from '../types/user';

// Mock users data - In a real app, this would come from a database
const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', createdAt: new Date('2023-01-15') },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', createdAt: new Date('2023-02-20') },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', createdAt: new Date('2023-03-10') },
  { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', createdAt: new Date('2023-04-05') },
  { id: 5, name: 'Charlie Wilson', email: 'charlie.wilson@example.com', createdAt: new Date('2023-05-12') }
];

export const usersController = {
  // Get all users
  getUsers: (req: Request, res: Response) => {
    try {
      res.json({
        users,
        total: users.length,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch users',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  },

  // Get user by ID
  getUserById: (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({
          error: 'Invalid user ID',
          message: 'User ID must be a number'
        });
      }

      const user = users.find(u => u.id === id);

      if (!user) {
        return res.status(404).json({
          error: 'User not found',
          message: `No user found with ID ${id}`
        });
      }

      res.json({
        user,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch user',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  },

  // Create new user
  createUser: (req: Request, res: Response) => {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          error: 'Missing required fields',
          message: 'Name and email are required'
        });
      }

      // Check if email already exists
      const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (existingUser) {
        return res.status(409).json({
          error: 'Email already exists',
          message: 'A user with this email already exists'
        });
      }

      // Create new user
      const newUser: User = {
        id: Math.max(...users.map(u => u.id)) + 1,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        createdAt: new Date()
      };

      users.push(newUser);

      res.status(201).json({
        user: newUser,
        message: 'User created successfully',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to create user',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
};