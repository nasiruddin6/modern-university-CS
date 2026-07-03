export const programs = [
  {
    id: 'arts-design',
    title: 'Arts & Design',
    category: 'Humanities',
    description:
      'Develop creative expression through painting, sculpture, digital media, and contemporary design practices.',
    image: '/images/programs/arts.jpg',
    coordinator: 'Dr. Charles Banks',
    duration: '4 Years',
    semester: 'Fall 2026',
    featured: true,
  },
  {
    id: 'foreign-languages',
    title: 'Foreign Languages',
    category: 'Languages',
    description:
      'Master global communication with immersive programs in English, French, Spanish, and Mandarin.',
    image: '/images/programs/language.jpg',
    coordinator: 'Dr. Maria Howard',
    duration: '4 Years',
    semester: 'Fall 2026',
    featured: true,
  },
  {
    id: 'sports-athletics',
    title: 'Sports & Athletics',
    category: 'Sports Science',
    description:
      'Combine athletic excellence with sports management, coaching science, and physical education.',
    image: '/images/programs/sports.jpg',
    coordinator: 'Dr. Steven Carter',
    duration: '4 Years',
    semester: 'Spring 2026',
    featured: true,
  },
  {
    id: 'cse',
    title: 'Computer Science & Engineering',
    category: 'Engineering',
    description:
      'Build expertise in software engineering, AI, cybersecurity, and modern computing systems.',
    image: '/images/programs/cse.jpg',
    coordinator: 'Dr. Sarah Rahman',
    duration: '4 Years',
    semester: 'Fall 2026',
    featured: false,
  },
  {
    id: 'eee',
    title: 'Electrical & Electronic Engineering',
    category: 'Engineering',
    description:
      'Study power systems, electronics, telecommunications, and embedded systems design.',
    image: '/images/programs/eee.jpg',
    coordinator: 'Dr. Karim Hassan',
    duration: '4 Years',
    semester: 'Fall 2026',
    featured: false,
  },
  {
    id: 'bba',
    title: 'Business Administration',
    category: 'Business',
    description:
      'Learn finance, marketing, entrepreneurship, and leadership for the global business landscape.',
    image: '/images/programs/business.jpg',
    coordinator: 'Dr. Nadia Chowdhury',
    duration: '4 Years',
    semester: 'Fall 2026',
    featured: false,
  },
  {
    id: 'law',
    title: 'Law',
    category: 'Law',
    description:
      'Gain a strong foundation in constitutional law, corporate law, and international legal practice.',
    image: '/images/programs/law.jpg',
    coordinator: 'Dr. James Mitchell',
    duration: '5 Years',
    semester: 'Fall 2026',
    featured: false,
  },
  {
    id: 'english',
    title: 'English Literature',
    category: 'Humanities',
    description:
      'Explore classic and contemporary literature, linguistics, and professional communication.',
    image: '/images/programs/english.jpg',
    coordinator: 'Dr. Emily Watson',
    duration: '4 Years',
    semester: 'Spring 2026',
    featured: false,
  },
  {
    id: 'architecture',
    title: 'Architecture',
    category: 'Design',
    description:
      'Design sustainable buildings and urban spaces through studio-based learning and technology.',
    image: '/images/programs/architecture.jpg',
    coordinator: 'Dr. Ahmed Farid',
    duration: '5 Years',
    semester: 'Fall 2026',
    featured: false,
  },
];

export const featuredPrograms = programs.filter((p) => p.featured);

export const programCategories = [...new Set(programs.map((p) => p.category))];
