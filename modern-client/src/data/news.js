import img1 from '../assets/clg (3).jpg';
import img2 from '../assets/clg (2).jpg';
import img3 from '../assets/clg (1).jpg';
import img4 from '../assets/img (1).jpg';
import img5 from '../assets/img (3).jpg';
import img6 from '../assets/business-people-meeting.jpg';

export const newsItems = [
  {
    id: 1,
    title: 'Liberal Arts Colleges Rankings',
    category: 'Rankings',
    excerpt:
      'Modern University climbs national rankings with outstanding performance in arts, sciences, and student satisfaction.',
    image: img1,
    date: '2 days ago',
    featured: true,
  },
  {
    id: 2,
    title: 'Studying in the United States',
    category: 'International',
    excerpt:
      'A comprehensive guide for international students on admissions, visas, scholarships, and campus life in the US.',
    image: img2,
    date: '4 days ago',
    featured: true,
  },
  {
    id: 3,
    title: 'Paying for Community College',
    category: 'Financial Aid',
    excerpt:
      'New scholarship programs and payment plans make quality education more accessible for every deserving student.',
    image: img3,
    date: '1 week ago',
    featured: true,
  },
  {
    id: 4,
    title: 'New Research Center Opens on Campus',
    category: 'Research',
    excerpt:
      'State-of-the-art laboratories will support breakthrough research in AI, renewable energy, and biomedical sciences.',
    image: img4,
    date: '1 week ago',
    featured: false,
  },
  {
    id: 5,
    title: 'Annual Science Fair Winners Announced',
    category: 'Campus',
    excerpt:
      'Students from engineering and science faculties showcased innovative projects judged by industry experts.',
    image: img5,
    date: '2 weeks ago',
    featured: false,
  },
  {
    id: 6,
    title: 'Alumni Networking Event 2026',
    category: 'Alumni',
    excerpt:
      'Graduates from across decades returned to campus to mentor current students and share career insights.',
    image: img6,
    date: '3 weeks ago',
    featured: false,
  },
];

export const featuredNews = newsItems.filter((item) => item.featured);

export const newsCategories = [...new Set(newsItems.map((item) => item.category))];
