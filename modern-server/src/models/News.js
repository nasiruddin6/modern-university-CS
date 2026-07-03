import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true },
    image: { type: String, required: true },
    featured: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const News = mongoose.model('News', newsSchema);
export default News;
