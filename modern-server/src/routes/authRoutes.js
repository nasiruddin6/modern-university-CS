import { Router } from 'express';
import { protect, authorize, optionalProtect } from '../middleware/auth.js';
import {
  register,
  login,
  getMe,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/authController.js';

const router = Router();

router.post('/login', login);
router.post('/register', optionalProtect, register);
router.get('/me', protect, getMe);

router.get('/users', protect, authorize('admin'), getUsers);
router.put('/users/:id', protect, authorize('admin'), updateUser);
router.delete('/users/:id', protect, authorize('admin'), deleteUser);

export default router;
