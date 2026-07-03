import News from '../models/News.js';
import { formatNews } from '../utils/formatters.js';

export const getNews = async (req, res, next) => {
  try {
    const { featured, category } = req.query;
    const filter = req.user?.role === 'admin' ? {} : { isPublished: true };

    if (featured === 'true') filter.featured = true;
    if (category) filter.category = category;

    const items = await News.find(filter).sort({ publishedAt: -1 });
    res.json({ success: true, data: items.map(formatNews) });
  } catch (err) {
    next(err);
  }
};

export const getNewsById = async (req, res, next) => {
  try {
    const item = await News.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }
    res.json({ success: true, data: formatNews(item) });
  } catch (err) {
    next(err);
  }
};

export const createNews = async (req, res, next) => {
  try {
    const item = await News.create(req.body);
    res.status(201).json({ success: true, data: formatNews(item) });
  } catch (err) {
    next(err);
  }
};

export const updateNews = async (req, res, next) => {
  try {
    const item = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }
    res.json({ success: true, data: formatNews(item) });
  } catch (err) {
    next(err);
  }
};

export const deleteNews = async (req, res, next) => {
  try {
    const item = await News.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }
    res.json({ success: true, message: 'News deleted' });
  } catch (err) {
    next(err);
  }
};
