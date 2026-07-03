import { Router } from 'express';
import { protect, authorize, optionalProtect } from '../middleware/auth.js';
import {
  getNotices,
  createNotice,
  updateNotice,
  deleteNotice,
} from '../controllers/noticeController.js';

const router = Router();

router.get('/', optionalProtect, getNotices);
router.post('/', protect, authorize('admin'), createNotice);
router.put('/:id', protect, authorize('admin'), updateNotice);
router.delete('/:id', protect, authorize('admin'), deleteNotice);

export default router;
