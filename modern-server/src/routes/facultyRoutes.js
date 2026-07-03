import { Router } from 'express';
import { protect, authorize, optionalProtect } from '../middleware/auth.js';
import {
  getFaculty,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} from '../controllers/facultyController.js';

const router = Router();

router.get('/', optionalProtect, getFaculty);
router.post('/', protect, authorize('admin'), createFaculty);
router.put('/:id', protect, authorize('admin'), updateFaculty);
router.delete('/:id', protect, authorize('admin'), deleteFaculty);

export default router;
