import mongoose from 'mongoose';

const programSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    coordinator: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    semester: { type: String, required: true, trim: true },
    featured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Program = mongoose.model('Program', programSchema);
export default Program;
