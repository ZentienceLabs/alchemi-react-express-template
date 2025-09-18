import { Router } from 'express';
import { usersController } from '../controllers/users';

const router = Router();

// Welcome endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Alchemi Express API!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/health',
      hello: '/hello',
      users: '/users'
    }
  });
});

// Hello endpoint
router.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from Alchemi Express API!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Users routes
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);

export { router as apiRoutes };