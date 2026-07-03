import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import routes from './src/routes/index.js';
import { errorHandler } from './src/middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`API health: http://localhost:${PORT}/api/health`);
    });
  } catch (err) {
    console.error('\n❌ Server failed to start — MongoDB connection error\n');
    if (err.message?.includes('whitelist') || err.name === 'MongooseServerSelectionError') {
      console.error('Fix: MongoDB Atlas → Network Access → Add IP Address');
      console.error('     Select "Allow Access from Anywhere" (0.0.0.0/0) for development\n');
    } else {
      console.error(err.message);
    }
    process.exit(1);
  }
};

start();
