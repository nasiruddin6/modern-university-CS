import Notice from '../models/Notice.js';
import { formatNotice } from '../utils/formatters.js';

export const getNotices = async (req, res, next) => {
  try {
    const filter = req.user?.role === 'admin' ? {} : { isActive: true };
    const notices = await Notice.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: notices.map(formatNotice) });
  } catch (err) {
    next(err);
  }
};

export const createNotice = async (req, res, next) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json({ success: true, data: formatNotice(notice) });
  } catch (err) {
    next(err);
  }
};

export const updateNotice = async (req, res, next) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!notice) {
      return res.status(404).json({ success: false, message: 'Notice not found' });
    }
    res.json({ success: true, data: formatNotice(notice) });
  } catch (err) {
    next(err);
  }
};

export const deleteNotice = async (req, res, next) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      return res.status(404).json({ success: false, message: 'Notice not found' });
    }
    res.json({ success: true, message: 'Notice deleted' });
  } catch (err) {
    next(err);
  }
};
