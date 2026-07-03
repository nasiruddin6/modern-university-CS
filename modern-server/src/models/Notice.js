import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
    path: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Notice = mongoose.model('Notice', noticeSchema);
export default Notice;
