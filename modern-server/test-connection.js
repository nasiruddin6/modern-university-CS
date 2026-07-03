import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

console.log('Testing MongoDB Atlas connection...\n');
console.log('URI user:', uri?.match(/\/\/([^:]+):/)?.[1] || 'missing');

try {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 15000 });
  await mongoose.connection.db.admin().command({ ping: 1 });
  console.log('\n✅ Connected successfully!');
  console.log('Database:', mongoose.connection.name);
} catch (err) {
  console.error('\n❌ Connection failed\n');
  console.error('Error name:', err.name);
  console.error('Message:', err.message?.split('\n')[0]);

  if (err.message?.includes('bad auth') || err.message?.includes('Authentication failed')) {
    console.error('\n→ Password/username ভুল। Atlas → Database Access → Edit user → password reset করুন');
    console.error('  তারপর .env-এ MONGODB_URI আপডেট করুন');
  } else if (err.message?.includes('whitelist') || err.name === 'MongooseServerSelectionError') {
    console.error('\n→ Network Access issue (IP whitelist)');
  } else {
    console.error('\nFull error:', err.message);
  }
  process.exit(1);
} finally {
  await mongoose.disconnect();
}
