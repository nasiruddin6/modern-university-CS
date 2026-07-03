import Program from '../models/Program.js';
import { formatProgram } from '../utils/formatters.js';

export const getPrograms = async (req, res, next) => {
  try {
    const { featured, category } = req.query;
    const filter = req.user?.role === 'admin' ? {} : { isActive: true };

    if (featured === 'true') filter.featured = true;
    if (category) filter.category = category;

    const items = await Program.find(filter).sort({ title: 1 });
    res.json({ success: true, data: items.map(formatProgram) });
  } catch (err) {
    next(err);
  }
};

export const getProgramBySlug = async (req, res, next) => {
  try {
    const item = await Program.findOne({ slug: req.params.slug });
    if (!item) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }
    res.json({ success: true, data: formatProgram(item) });
  } catch (err) {
    next(err);
  }
};

export const createProgram = async (req, res, next) => {
  try {
    const item = await Program.create(req.body);
    res.status(201).json({ success: true, data: formatProgram(item) });
  } catch (err) {
    next(err);
  }
};

export const updateProgram = async (req, res, next) => {
  try {
    const item = await Program.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }
    res.json({ success: true, data: formatProgram(item) });
  } catch (err) {
    next(err);
  }
};

export const deleteProgram = async (req, res, next) => {
  try {
    const item = await Program.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }
    res.json({ success: true, message: 'Program deleted' });
  } catch (err) {
    next(err);
  }
};
