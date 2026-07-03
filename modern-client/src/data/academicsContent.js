export const academicsPages = {
  '/programs/undergraduate': {
    category: 'Programs',
    title: 'Undergraduate Programs',
    subtitle: 'Four-year bachelor\'s degrees across all major faculties.',
    sections: [
      {
        heading: 'Available Degrees',
        items: [
          'BSc in Computer Science & Engineering (CSE)',
          'BSc in Electrical & Electronic Engineering (EEE)',
          'BBA in Business Administration',
          'LLB in Law · BA in English · BArch in Architecture',
        ],
      },
      {
        heading: 'Program Highlights',
        items: [
          'Duration: 4 years (8 semesters)',
          'Credit-based curriculum with internship requirement',
          'Industry mentorship and capstone projects',
          'Exchange programs with partner universities abroad',
        ],
      },
    ],
    cta: { label: 'View All Programs', path: '/programs' },
  },
  '/programs/graduate': {
    category: 'Programs',
    title: 'Graduate Programs',
    subtitle: 'Master\'s degrees for advanced specialization and research.',
    sections: [
      {
        heading: 'Master\'s Degrees',
        items: [
          'MSc in Computer Science & Engineering',
          'MBA in Business Administration',
          'MA in English Literature',
          'Master of Architecture (M.Arch)',
        ],
      },
      {
        heading: 'Admission Requirements',
        items: [
          "Bachelor's degree with minimum CGPA 3.0",
          'GRE / admission test score (program-specific)',
          'Statement of purpose and two reference letters',
        ],
      },
    ],
    cta: { label: 'How to Apply', path: '/admissions/apply' },
  },
  '/programs/doctoral': {
    category: 'Programs',
    title: 'Doctoral Studies',
    subtitle: 'PhD programs for original research and academic leadership.',
    sections: [
      {
        heading: 'PhD Fields',
        items: [
          'PhD in Engineering & Technology',
          'PhD in Business & Management',
          'PhD in Arts & Humanities',
          'PhD in Science & Research',
        ],
      },
      {
        heading: 'Research Support',
        items: [
          'Dedicated faculty supervisor and research committee',
          'Access to funded research labs and libraries',
          'Conference travel grants for doctoral candidates',
          'Teaching assistantship opportunities',
        ],
      },
    ],
    cta: { label: 'Contact Graduate Office', path: '/contacts' },
  },
  '/programs/online': {
    category: 'Programs',
    title: 'Online Learning',
    subtitle: 'Flexible degrees and certificates delivered fully online.',
    sections: [
      {
        heading: 'Online Offerings',
        items: [
          'Online BBA — complete your degree while working',
          'Professional certificates in IT, Business, and Design',
          'MOOC-style short courses with university credits',
        ],
      },
      {
        heading: 'Learning Platform',
        items: [
          'Live virtual classes and recorded lectures',
          '24/7 access to digital library resources',
          'Online exams and assignment submission portal',
          'Dedicated online student support team',
        ],
      },
    ],
    cta: { label: 'Browse Programs', path: '/programs' },
  },
  '/faculties/engineering': {
    category: 'Faculties',
    title: 'Faculty of Engineering',
    subtitle: 'CSE, EEE, and cutting-edge technology programs.',
    sections: [
      {
        heading: 'Departments',
        items: [
          'Computer Science & Engineering (CSE) — 3,200+ students',
          'Electrical & Electronic Engineering (EEE) — 2,100+ students',
          'Software Engineering & Data Science minors',
        ],
      },
      {
        heading: 'Facilities',
        items: [
          '12 specialized engineering laboratories',
          'Robotics & AI research center',
          'Industry partnership with 40+ tech companies',
        ],
      },
    ],
    cta: { label: 'Meet Our Faculty', path: '/' },
  },
  '/faculties/business': {
    category: 'Faculties',
    title: 'Faculty of Business',
    subtitle: 'BBA, MBA, and entrepreneurship programs.',
    sections: [
      {
        heading: 'Programs',
        items: [
          'BBA — Finance, Marketing, HR, Management',
          'MBA — Executive and full-time tracks',
          'Entrepreneurship & Innovation certificate',
        ],
      },
      {
        heading: 'Highlights',
        items: [
          'Case-study based learning with real businesses',
          'Annual business plan competition',
          'Corporate internship placement rate: 85%',
        ],
      },
    ],
    cta: { label: 'View BBA Program', path: '/programs' },
  },
  '/faculties/arts': {
    category: 'Faculties',
    title: 'Faculty of Arts & Sciences',
    subtitle: 'Humanities, languages, and liberal arts education.',
    sections: [
      {
        heading: 'Departments',
        items: [
          'English Language & Literature',
          'Arts & Design',
          'Foreign Languages (French, Spanish, Mandarin)',
          'Social Sciences & Philosophy',
        ],
      },
      {
        heading: 'Opportunities',
        items: [
          'Creative studios and language labs',
          'Annual arts exhibition and literary festival',
          'Study abroad programs in Europe and Asia',
        ],
      },
    ],
    cta: { label: 'Explore Campus', path: '/campus' },
  },
  '/faculties/medicine': {
    category: 'Faculties',
    title: 'Faculty of Medicine',
    subtitle: 'Health sciences and medical education (coming soon).',
    sections: [
      {
        heading: 'Planned Programs',
        items: [
          'MBBS — Bachelor of Medicine (launch 2027)',
          'BSc in Nursing & Public Health',
          'Medical research partnerships with hospitals',
        ],
      },
      {
        heading: 'Infrastructure',
        items: [
          'New medical college building under construction',
          'Simulation labs and anatomy museum planned',
          'Affiliated teaching hospital network',
        ],
      },
    ],
    cta: { label: 'Contact for Updates', path: '/contacts' },
  },
  '/academics/calendar': {
    category: 'Resources',
    title: 'Academic Calendar',
    subtitle: 'Key dates for Fall 2026 and Spring 2027 semesters.',
    sections: [
      {
        heading: 'Fall 2026',
        items: [
          'Registration: August 1–15, 2026',
          'Orientation Week: August 20–25, 2026',
          'Classes Begin: August 28, 2026',
          'Mid-term Exams: October 15–22, 2026',
          'Final Exams: December 15–22, 2026',
          'Winter Break: December 23 – January 10',
        ],
      },
      {
        heading: 'Spring 2027',
        items: [
          'Registration: January 5–12, 2027',
          'Classes Begin: January 15, 2027',
          'Spring Break: March 20–27, 2027',
          'Final Exams: May 15–22, 2027',
        ],
      },
    ],
    cta: { label: 'View Events', path: '/events' },
  },
  '/academics/library': {
    category: 'Resources',
    title: 'Central Library',
    subtitle: 'Your gateway to knowledge — physical and digital.',
    sections: [
      {
        heading: 'Collections',
        items: [
          '500,000+ books and 50,000+ e-journals',
          'Digital archives and thesis repository',
          'Quiet study zones and group discussion rooms',
        ],
      },
      {
        heading: 'Services & Hours',
        items: [
          'Open: Sun–Thu 8 AM – 11 PM, Fri–Sat 9 AM – 6 PM',
          'Book lending, inter-library loan, research assistance',
          'Online catalog and remote access for students',
        ],
      },
    ],
    cta: { label: 'Visit Campus', path: '/campus' },
  },
  '/academics/research': {
    category: 'Resources',
    title: 'Research Centers',
    subtitle: 'Innovation hubs driving discovery and industry collaboration.',
    sections: [
      {
        heading: 'Centers',
        items: [
          'Center for Artificial Intelligence & Robotics',
          'Renewable Energy Research Institute',
          'Center for Business Innovation & Entrepreneurship',
          'Social Sciences & Policy Research Unit',
        ],
      },
      {
        heading: 'Research Output',
        items: [
          '200+ peer-reviewed publications annually',
          'BDT 5 crore in research grants (2025)',
          'Student research symposium every semester',
        ],
      },
    ],
    cta: { label: 'Contact Research Office', path: '/contacts' },
  },
  '/academics/support': {
    category: 'Resources',
    title: 'Student Support',
    subtitle: 'Services to help you succeed academically and personally.',
    sections: [
      {
        heading: 'Academic Support',
        items: [
          'Academic advising and course planning',
          'Tutoring center for math, science, and writing',
          'Disability services and exam accommodations',
        ],
      },
      {
        heading: 'Wellbeing Services',
        items: [
          'Counseling and mental health support',
          'Career counseling and job placement',
          'Student clubs, sports, and cultural activities',
        ],
      },
    ],
    cta: { label: 'Contact Student Affairs', path: '/contacts' },
  },
};

export const academicNavLinks = [
  { label: 'Undergraduate', path: '/programs/undergraduate', group: 'Programs' },
  { label: 'Graduate', path: '/programs/graduate', group: 'Programs' },
  { label: 'Doctoral Studies', path: '/programs/doctoral', group: 'Programs' },
  { label: 'Online Learning', path: '/programs/online', group: 'Programs' },
  { label: 'All Programs', path: '/programs', group: 'Programs' },
  { label: 'Engineering', path: '/faculties/engineering', group: 'Faculties' },
  { label: 'Business', path: '/faculties/business', group: 'Faculties' },
  { label: 'Arts & Sciences', path: '/faculties/arts', group: 'Faculties' },
  { label: 'Medicine', path: '/faculties/medicine', group: 'Faculties' },
  { label: 'Academic Calendar', path: '/academics/calendar', group: 'Resources' },
  { label: 'Library', path: '/academics/library', group: 'Resources' },
  { label: 'Research Centers', path: '/academics/research', group: 'Resources' },
  { label: 'Student Support', path: '/academics/support', group: 'Resources' },
];

export const academicNavGroups = ['Programs', 'Faculties', 'Resources'];
