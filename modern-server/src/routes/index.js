import { Router } from 'express';
import authRoutes from './authRoutes.js';
import noticeRoutes from './noticeRoutes.js';
import newsRoutes from './newsRoutes.js';
import eventRoutes from './eventRoutes.js';
import facultyRoutes from './facultyRoutes.js';
import programRoutes from './programRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/notices', noticeRoutes);
router.use('/news', newsRoutes);
router.use('/events', eventRoutes);
router.use('/faculty', facultyRoutes);
router.use('/programs', programRoutes);

router.get('/health', (req, res) => {
  res.json({ success: true, message: 'Modern University API is running' });
});

export default router;
