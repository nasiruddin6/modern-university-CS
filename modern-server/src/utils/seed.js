import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Notice from '../models/Notice.js';
import News from '../models/News.js';
import Event from '../models/Event.js';
import Faculty from '../models/Faculty.js';
import Program from '../models/Program.js';

const IMG = {
  news1: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&q=75',
  news2: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&q=75',
  news3: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&q=75',
  news4: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&q=75',
  news5: 'https://images.unsplash.com/photo-1581091226825-a6a2c5feef5b?w=800&auto=format&q=75',
  news6: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&q=75',
  event1: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&q=75',
  event2: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&q=75',
  event3: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&q=75',
  event4: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&q=75',
};

const seed = async () => {
  await connectDB();

  await Promise.all([
    User.deleteMany(),
    Notice.deleteMany(),
    News.deleteMany(),
    Event.deleteMany(),
    Faculty.deleteMany(),
    Program.deleteMany(),
  ]);

  console.log('Cleared existing data...');

  await User.create([
    {
      name: 'System Admin',
      email: 'admin@university.edu',
      password: 'admin123',
      role: 'admin',
    },
    {
      name: 'Dr. Sarah Rahman',
      email: 'teacher@university.edu',
      password: 'teacher123',
      role: 'teacher',
      department: 'Computer Science & Engineering',
      designation: 'Professor',
    },
    {
      name: 'John Doe',
      email: 'student@university.edu',
      password: 'student123',
      role: 'student',
      studentId: 'MU-2024-001',
      department: 'Computer Science & Engineering',
    },
  ]);

  await Notice.insertMany([
    { text: 'Spring 2026 admission applications are now open — apply before March 15.', path: '/admissions/apply', order: 1 },
    { text: 'Mid-term examination schedule published for all faculties.', path: '/academics/calendar', order: 2 },
    { text: 'Campus career fair on April 10 — register at the student portal.', path: '/events', order: 3 },
    { text: 'Scholarship applications for merit-based awards close on February 28.', path: '/scholarships', order: 4 },
    { text: 'Library extended hours during final exams: 8 AM – 11 PM.', path: '/academics/library', order: 5 },
  ]);

  const now = Date.now();
  await News.insertMany([
    { title: 'Liberal Arts Colleges Rankings', category: 'Rankings', excerpt: 'Modern University climbs national rankings with outstanding performance in arts, sciences, and student satisfaction.', image: IMG.news1, featured: true, publishedAt: new Date(now - 2 * 86400000) },
    { title: 'Studying in the United States', category: 'International', excerpt: 'A comprehensive guide for international students on admissions, visas, scholarships, and campus life in the US.', image: IMG.news2, featured: true, publishedAt: new Date(now - 4 * 86400000) },
    { title: 'Paying for Community College', category: 'Financial Aid', excerpt: 'New scholarship programs and payment plans make quality education more accessible for every deserving student.', image: IMG.news3, featured: true, publishedAt: new Date(now - 7 * 86400000) },
    { title: 'New Research Center Opens on Campus', category: 'Research', excerpt: 'State-of-the-art laboratories will support breakthrough research in AI, renewable energy, and biomedical sciences.', image: IMG.news4, featured: false, publishedAt: new Date(now - 7 * 86400000) },
    { title: 'Annual Science Fair Winners Announced', category: 'Campus', excerpt: 'Students from engineering and science faculties showcased innovative projects judged by industry experts.', image: IMG.news5, featured: false, publishedAt: new Date(now - 14 * 86400000) },
    { title: 'Alumni Networking Event 2026', category: 'Alumni', excerpt: 'Graduates from across decades returned to campus to mentor current students and share career insights.', image: IMG.news6, featured: false, publishedAt: new Date(now - 21 * 86400000) },
  ]);

  await Event.insertMany([
    { title: 'Spacewalking Conference', speaker: 'Walter Stanley', location: 'Science Auditorium', time: '5:00 PM', category: 'Conference', image: IMG.event1, eventDate: new Date('2026-09-30') },
    { title: 'International Research Summit', speaker: 'Dr. Elena Morris', location: 'Conference Hall B', time: '3:00 PM', category: 'Summit', image: IMG.event2, eventDate: new Date('2026-10-12') },
    { title: 'Graphic Design Workshop', speaker: 'Bruce Hawkins', location: 'Design Studio 2', time: '11:00 AM', category: 'Workshop', image: IMG.event3, eventDate: new Date('2026-11-05') },
    { title: 'History of Art Exhibition', speaker: 'Danielle Garza', location: 'Arts Gallery', time: '4:30 PM', category: 'Exhibition', image: IMG.event4, eventDate: new Date('2026-12-18') },
    { title: 'Spring Admission Open Day', speaker: 'Admissions Office', location: 'Main Campus', time: '10:00 AM', category: 'Open Day', image: IMG.event1, eventDate: new Date('2027-01-22') },
    { title: 'Engineering Career Fair', speaker: 'Career Services', location: 'Engineering Block', time: '2:00 PM', category: 'Career', image: IMG.event2, eventDate: new Date('2027-02-14') },
  ]);

  await Faculty.insertMany([
    { name: 'Dr. Sarah Rahman', designation: 'Professor', department: 'Computer Science & Engineering', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format&q=75', social: { linkedin: 'https://linkedin.com', facebook: 'https://facebook.com', twitter: 'https://twitter.com', email: 'mailto:sarah.rahman@university.edu' }, order: 1 },
    { name: 'Dr. Karim Hassan', designation: 'Associate Professor', department: 'Electrical & Electronic Engineering', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face&auto=format&q=75', social: { linkedin: 'https://linkedin.com', facebook: 'https://facebook.com', twitter: 'https://twitter.com', email: 'mailto:karim.hassan@university.edu' }, order: 2 },
    { name: 'Dr. Nadia Chowdhury', designation: 'Head of Department', department: 'Business Administration', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face&auto=format&q=75', social: { linkedin: 'https://linkedin.com', facebook: 'https://facebook.com', twitter: 'https://twitter.com', email: 'mailto:nadia.chowdhury@university.edu' }, order: 3 },
    { name: 'Dr. James Mitchell', designation: 'Senior Lecturer', department: 'Law', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=75', social: { linkedin: 'https://linkedin.com', facebook: 'https://facebook.com', twitter: 'https://twitter.com', email: 'mailto:james.mitchell@university.edu' }, order: 4 },
    { name: 'Dr. Emily Watson', designation: 'Professor', department: 'English', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format&q=75', social: { linkedin: 'https://linkedin.com', facebook: 'https://facebook.com', twitter: 'https://twitter.com', email: 'mailto:emily.watson@university.edu' }, order: 5 },
    { name: 'Dr. Ahmed Farid', designation: 'Associate Professor', department: 'Architecture', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format&q=75', social: { linkedin: 'https://linkedin.com', facebook: 'https://facebook.com', twitter: 'https://twitter.com', email: 'mailto:ahmed.farid@university.edu' }, order: 6 },
    { name: 'Dr. Lisa Park', designation: 'Assistant Professor', department: 'Computer Science & Engineering', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face&auto=format&q=75', social: { linkedin: 'https://linkedin.com', facebook: 'https://facebook.com', twitter: 'https://twitter.com', email: 'mailto:lisa.park@university.edu' }, order: 7 },
    { name: 'Dr. Robert Chen', designation: 'Professor', department: 'Electrical & Electronic Engineering', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face&auto=format&q=75', social: { linkedin: 'https://linkedin.com', facebook: 'https://facebook.com', twitter: 'https://twitter.com', email: 'mailto:robert.chen@university.edu' }, order: 8 },
  ]);

  await Program.insertMany([
    { slug: 'arts-design', title: 'Arts & Design', category: 'Humanities', description: 'Develop creative expression through painting, sculpture, digital media, and contemporary design practices.', image: '/images/programs/arts.jpg', coordinator: 'Dr. Charles Banks', duration: '4 Years', semester: 'Fall 2026', featured: true },
    { slug: 'foreign-languages', title: 'Foreign Languages', category: 'Languages', description: 'Master global communication with immersive programs in English, French, Spanish, and Mandarin.', image: '/images/programs/language.jpg', coordinator: 'Dr. Maria Howard', duration: '4 Years', semester: 'Fall 2026', featured: true },
    { slug: 'sports-athletics', title: 'Sports & Athletics', category: 'Sports Science', description: 'Combine athletic excellence with sports management, coaching science, and physical education.', image: '/images/programs/sports.jpg', coordinator: 'Dr. Steven Carter', duration: '4 Years', semester: 'Spring 2026', featured: true },
    { slug: 'cse', title: 'Computer Science & Engineering', category: 'Engineering', description: 'Build expertise in software engineering, AI, cybersecurity, and modern computing systems.', image: '/images/programs/cse.jpg', coordinator: 'Dr. Sarah Rahman', duration: '4 Years', semester: 'Fall 2026', featured: false },
    { slug: 'eee', title: 'Electrical & Electronic Engineering', category: 'Engineering', description: 'Study power systems, electronics, telecommunications, and embedded systems design.', image: '/images/programs/eee.jpg', coordinator: 'Dr. Karim Hassan', duration: '4 Years', semester: 'Fall 2026', featured: false },
    { slug: 'bba', title: 'Business Administration', category: 'Business', description: 'Learn finance, marketing, entrepreneurship, and leadership for the global business landscape.', image: '/images/programs/business.jpg', coordinator: 'Dr. Nadia Chowdhury', duration: '4 Years', semester: 'Fall 2026', featured: false },
    { slug: 'law', title: 'Law', category: 'Law', description: 'Gain a strong foundation in constitutional law, corporate law, and international legal practice.', image: '/images/programs/law.jpg', coordinator: 'Dr. James Mitchell', duration: '5 Years', semester: 'Fall 2026', featured: false },
    { slug: 'english', title: 'English Literature', category: 'Humanities', description: 'Explore classic and contemporary literature, linguistics, and professional communication.', image: '/images/programs/english.jpg', coordinator: 'Dr. Emily Watson', duration: '4 Years', semester: 'Spring 2026', featured: false },
    { slug: 'architecture', title: 'Architecture', category: 'Design', description: 'Design sustainable buildings and urban spaces through studio-based learning and technology.', image: '/images/programs/architecture.jpg', coordinator: 'Dr. Ahmed Farid', duration: '5 Years', semester: 'Fall 2026', featured: false },
  ]);

  console.log('Database seeded successfully!');
  console.log('\nDefault login credentials:');
  console.log('  Admin:   admin@university.edu / admin123');
  console.log('  Teacher: teacher@university.edu / teacher123');
  console.log('  Student: student@university.edu / student123');

  await mongoose.disconnect();
  process.exit(0);
};

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
