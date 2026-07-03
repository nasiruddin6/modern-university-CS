import { Router } from 'express';
import { protect, authorize, optionalProtect } from '../middleware/auth.js';
import {
  getPrograms,
  getProgramBySlug,
  createProgram,
  updateProgram,
  deleteProgram,
} from '../controllers/programController.js';

const router = Router();

router.get('/', optionalProtect, getPrograms);
router.get('/:slug', getProgramBySlug);
router.post('/', protect, authorize('admin'), createProgram);
router.put('/:id', protect, authorize('admin'), updateProgram);
router.delete('/:id', protect, authorize('admin'), deleteProgram);

export default router;
