import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    speaker: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    eventDate: { type: Date, required: true },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);
export default Event;
