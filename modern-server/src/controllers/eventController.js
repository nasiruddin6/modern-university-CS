import Event from '../models/Event.js';
import { formatEvent } from '../utils/formatters.js';

export const getEvents = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const filter = req.user?.role === 'admin' ? {} : { isPublished: true };

    let query = Event.find(filter).sort({ eventDate: 1 });
    if (limit) query = query.limit(Number(limit));

    const items = await query;
    res.json({ success: true, data: items.map(formatEvent) });
  } catch (err) {
    next(err);
  }
};

export const getEventById = async (req, res, next) => {
  try {
    const item = await Event.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.json({ success: true, data: formatEvent(item) });
  } catch (err) {
    next(err);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const item = await Event.create(req.body);
    res.status(201).json({ success: true, data: formatEvent(item) });
  } catch (err) {
    next(err);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const item = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.json({ success: true, data: formatEvent(item) });
  } catch (err) {
    next(err);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const item = await Event.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.json({ success: true, message: 'Event deleted' });
  } catch (err) {
    next(err);
  }
};
