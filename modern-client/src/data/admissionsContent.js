export const admissionsContent = {
  apply: {
    title: 'How to Apply',
    subtitle: 'Step-by-step guide to joining Modern University.',
    sections: [
      {
        heading: 'Application Steps',
        items: [
          'Create an account on the online admissions portal.',
          'Choose your program and fill in personal & academic details.',
          'Upload required documents (transcripts, ID, photos).',
          'Pay the application fee and submit your application.',
          'Track status via email and the student portal.',
        ],
      },
      {
        heading: 'Required Documents',
        items: [
          'SSC & HSC / equivalent certificates and transcripts',
          'National ID or passport copy',
          'Recent passport-size photographs',
          'Recommendation letter (for graduate programs)',
        ],
      },
    ],
    cta: { label: 'Start Application', path: '/contacts' },
  },
  requirements: {
    title: 'Admission Requirements',
    subtitle: 'Eligibility criteria for undergraduate and graduate programs.',
    sections: [
      {
        heading: 'Undergraduate',
        items: [
          'Minimum GPA 3.5 in SSC and HSC (or equivalent)',
          'Pass in English and Mathematics',
          'Valid admission test score (where applicable)',
        ],
      },
      {
        heading: 'Graduate',
        items: [
          "Bachelor's degree with minimum CGPA 3.0",
          'English proficiency (IELTS 6.0 / TOEFL 80 or internal test)',
          'Statement of purpose and two reference letters',
        ],
      },
    ],
    cta: { label: 'View Programs', path: '/programs' },
  },
  deadlines: {
    title: 'Application Deadlines',
    subtitle: 'Important dates for Fall 2026 and Spring 2027 intake.',
    sections: [
      {
        heading: 'Fall 2026 Semester',
        items: [
          'Early Application: March 1 – April 30, 2026',
          'Regular Application: May 1 – June 30, 2026',
          'Late Application: July 1 – July 15, 2026 (limited seats)',
          'Orientation Week: August 20–25, 2026',
          'Classes Begin: August 28, 2026',
        ],
      },
      {
        heading: 'Spring 2027 Semester',
        items: [
          'Application Opens: September 1, 2026',
          'Application Deadline: November 30, 2026',
          'Classes Begin: January 15, 2027',
        ],
      },
    ],
    cta: { label: 'Apply Now', path: '/admissions/apply' },
  },
  transfer: {
    title: 'Transfer Students',
    subtitle: 'Continue your education at Modern University.',
    sections: [
      {
        heading: 'Who Can Transfer?',
        items: [
          'Students from accredited universities and colleges',
          'Minimum CGPA 2.75 in completed coursework',
          'Maximum 75% of credits may be transferred',
        ],
      },
      {
        heading: 'Transfer Process',
        items: [
          'Submit official transcripts from previous institution',
          'Course-by-course evaluation by admissions office',
          'Meet program-specific requirements',
          'Receive credit transfer report before enrollment',
        ],
      },
    ],
    cta: { label: 'Contact Admissions', path: '/contacts' },
  },
  tuition: {
    title: 'Tuition & Fees',
    subtitle: 'Transparent fee structure for all programs.',
    sections: [
      {
        heading: 'Undergraduate (Per Semester)',
        items: [
          'Engineering Programs: BDT 1,20,000',
          'Business & Humanities: BDT 90,000',
          'Laboratory & Library Fee: BDT 8,000',
          'Student Activity Fee: BDT 3,000',
        ],
      },
      {
        heading: 'Additional Costs',
        items: [
          'Application Fee: BDT 1,500 (one-time)',
          'Residential Housing: BDT 25,000 – 40,000 / semester',
          'Health Insurance: BDT 5,000 / year',
        ],
      },
    ],
    cta: { label: 'Financial Aid Options', path: '/admissions/financial-aid' },
  },
  scholarships: {
    title: 'Scholarships',
    subtitle: 'Merit-based and need-based awards for deserving students.',
    sections: [
      {
        heading: 'Merit Scholarships',
        items: [
          'President\'s Scholarship — 100% tuition (GPA 5.0 in HSC)',
          'Dean\'s Scholarship — 50% tuition (GPA 4.5+ in HSC)',
          'Faculty Scholarship — 25% tuition (top 10% admission test scores)',
        ],
      },
      {
        heading: 'Special Awards',
        items: [
          'Sports Excellence Scholarship — up to 75% tuition',
          'Need-Based Aid — assessed individually',
          'International Student Grant — BDT 50,000 / semester',
        ],
      },
    ],
    cta: { label: 'Apply for Scholarship', path: '/contacts' },
  },
  'financial-aid': {
    title: 'Financial Aid',
    subtitle: 'Support to make your education affordable.',
    sections: [
      {
        heading: 'Aid Programs',
        items: [
          'Need-based grants for qualifying families',
          'Work-study programs on campus',
          'Emergency hardship fund for enrolled students',
          'Sibling discount — 10% for second family member',
        ],
      },
      {
        heading: 'How to Apply',
        items: [
          'Complete the Financial Aid form with your admission application',
          'Submit family income documentation',
          'Aid decision sent within 2 weeks of admission offer',
        ],
      },
    ],
    cta: { label: 'View Scholarships', path: '/scholarships' },
  },
  payment: {
    title: 'Payment Plans',
    subtitle: 'Flexible options to manage your tuition payments.',
    sections: [
      {
        heading: 'Payment Options',
        items: [
          'Full payment — 5% discount if paid before semester starts',
          'Two-installment plan — 50% before classes, 50% mid-semester',
          'Monthly installment plan — up to 6 months (approved applicants)',
        ],
      },
      {
        heading: 'Accepted Methods',
        items: [
          'Bank transfer / bKash / Nagad',
          'Credit & debit cards via online portal',
          'Cash payment at university accounts office',
        ],
      },
    ],
    cta: { label: 'Contact Accounts Office', path: '/contacts' },
  },
  'open-days': {
    title: 'Open Days',
    subtitle: 'Visit campus and meet faculty, students, and advisors.',
    sections: [
      {
        heading: 'Upcoming Open Days',
        items: [
          'Spring Open Day — March 15, 2026 · 10 AM – 4 PM',
          'Engineering Showcase — April 5, 2026 · 9 AM – 3 PM',
          'International Students Day — May 10, 2026 · 11 AM – 5 PM',
        ],
      },
      {
        heading: 'What to Expect',
        items: [
          'Guided campus tour and facility visits',
          'Meet program coordinators and current students',
          'Live Q&A on admissions and scholarships',
          'Free lunch for registered visitors',
        ],
      },
    ],
    cta: { label: 'View All Events', path: '/events' },
  },
  international: {
    title: 'International Students',
    subtitle: 'Welcome to a global community of learners.',
    sections: [
      {
        heading: 'For International Applicants',
        items: [
          'Recognized secondary school or university credentials',
          'IELTS 6.0 / TOEFL 80 or equivalent English proficiency',
          'Valid passport and student visa support letter provided',
        ],
      },
      {
        heading: 'Support Services',
        items: [
          'Dedicated international student office',
          'Airport pickup and orientation week',
          'On-campus housing assistance',
          'Cultural integration programs and language support',
        ],
      },
    ],
    cta: { label: 'Contact International Office', path: '/contacts' },
  },
};

export const admissionNavLinks = [
  { label: 'How to Apply', path: '/admissions/apply' },
  { label: 'Requirements', path: '/admissions/requirements' },
  { label: 'Deadlines', path: '/admissions/deadlines' },
  { label: 'Transfer Students', path: '/admissions/transfer' },
  { label: 'Tuition & Fees', path: '/admissions/tuition' },
  { label: 'Scholarships', path: '/scholarships' },
  { label: 'Financial Aid', path: '/admissions/financial-aid' },
  { label: 'Payment Plans', path: '/admissions/payment' },
  { label: 'Open Days', path: '/admissions/open-days' },
  { label: 'International Students', path: '/admissions/international' },
  { label: 'Campus Tours', path: '/campus' },
  { label: 'Contact Admissions', path: '/contacts' },
];
