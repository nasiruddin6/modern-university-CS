import img1 from '../assets/img (1).jpg';
import img2 from '../assets/img (2).jpg';
import img3 from '../assets/img (3).jpg';
import img4 from '../assets/img (4).jpg';

export const events = [
  {
    id: 1,
    day: '31',
    month: 'Sep',
    monthFull: 'September',
    year: '2026',
    time: '5:00 PM',
    title: 'Spacewalking Conference',
    speaker: 'Walter Stanley',
    location: 'Science Auditorium',
    image: img1,
    category: 'Conference',
  },
  {
    id: 2,
    day: '12',
    month: 'Oct',
    monthFull: 'October',
    year: '2026',
    time: '3:00 PM',
    title: 'International Research Summit',
    speaker: 'Dr. Elena Morris',
    location: 'Conference Hall B',
    image: img2,
    category: 'Summit',
  },
  {
    id: 3,
    day: '05',
    month: 'Nov',
    monthFull: 'November',
    year: '2026',
    time: '11:00 AM',
    title: 'Graphic Design Workshop',
    speaker: 'Bruce Hawkins',
    location: 'Design Studio 2',
    image: img3,
    category: 'Workshop',
  },
  {
    id: 4,
    day: '18',
    month: 'Dec',
    monthFull: 'December',
    year: '2026',
    time: '4:30 PM',
    title: 'History of Art Exhibition',
    speaker: 'Danielle Garza',
    location: 'Arts Gallery',
    image: img4,
    category: 'Exhibition',
  },
  {
    id: 5,
    day: '22',
    month: 'Jan',
    monthFull: 'January',
    year: '2027',
    time: '10:00 AM',
    title: 'Spring Admission Open Day',
    speaker: 'Admissions Office',
    location: 'Main Campus',
    image: img1,
    category: 'Open Day',
  },
  {
    id: 6,
    day: '14',
    month: 'Feb',
    monthFull: 'February',
    year: '2027',
    time: '2:00 PM',
    title: 'Engineering Career Fair',
    speaker: 'Career Services',
    location: 'Engineering Block',
    image: img2,
    category: 'Career',
  },
];

export const eventMonths = [...new Set(events.map((e) => `${e.monthFull} ${e.year}`))];

export const featuredEvents = events.slice(0, 4);
