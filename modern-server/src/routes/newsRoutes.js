import { Router } from 'express';
import { protect, authorize, optionalProtect } from '../middleware/auth.js';
import {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from '../controllers/newsController.js';

const router = Router();

router.get('/', optionalProtect, getNews);
router.get('/:id', getNewsById);
router.post('/', protect, authorize('admin'), createNews);
router.put('/:id', protect, authorize('admin'), updateNews);
router.delete('/:id', protect, authorize('admin'), deleteNews);

export default router;
