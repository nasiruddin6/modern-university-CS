import Faculty from '../models/Faculty.js';
import { formatFaculty } from '../utils/formatters.js';

export const getFaculty = async (req, res, next) => {
  try {
    const filter = req.user?.role === 'admin' ? {} : { isActive: true };
    const items = await Faculty.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: items.map(formatFaculty) });
  } catch (err) {
    next(err);
  }
};

export const createFaculty = async (req, res, next) => {
  try {
    const item = await Faculty.create(req.body);
    res.status(201).json({ success: true, data: formatFaculty(item) });
  } catch (err) {
    next(err);
  }
};

export const updateFaculty = async (req, res, next) => {
  try {
    const item = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ success: false, message: 'Faculty not found' });
    }
    res.json({ success: true, data: formatFaculty(item) });
  } catch (err) {
    next(err);
  }
};

export const deleteFaculty = async (req, res, next) => {
  try {
    const item = await Faculty.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Faculty not found' });
    }
    res.json({ success: true, message: 'Faculty deleted' });
  } catch (err) {
    next(err);
  }
};
