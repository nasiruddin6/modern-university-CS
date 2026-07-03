import { programs } from './programs';
import { newsItems } from './news';
import { events } from './events';
import { admissionNavLinks } from './admissionsContent';
import { academicNavLinks } from './academicsContent';

const staticPages = [
  { title: 'Home', path: '/', category: 'Page', keywords: 'home main' },
  { title: 'Campus', path: '/campus', category: 'Page', keywords: 'campus tour facilities gallery' },
  { title: 'Contact Us', path: '/contacts', category: 'Page', keywords: 'contact email phone address' },
  { title: 'All Programs', path: '/programs', category: 'Programs', keywords: 'programs courses degrees' },
  { title: 'All Events', path: '/events', category: 'Events', keywords: 'events calendar conference workshop' },
  { title: 'All News', path: '/news', category: 'News', keywords: 'news updates announcements' },
  { title: 'Apply Now', path: '/admissions/apply', category: 'Admissions', keywords: 'apply application admission' },
];

export const searchIndex = [
  ...staticPages,
  ...programs.map((p) => ({
    title: p.title,
    path: '/programs',
    category: 'Program',
    keywords: `${p.category} ${p.description} ${p.coordinator}`,
  })),
  ...newsItems.map((n) => ({
    title: n.title,
    path: '/news',
    category: 'News',
    keywords: `${n.category} ${n.excerpt}`,
  })),
  ...events.map((e) => ({
    title: e.title,
    path: '/events',
    category: 'Event',
    keywords: `${e.speaker} ${e.location} ${e.month} ${e.year}`,
  })),
  ...admissionNavLinks.map((l) => ({
    title: l.label,
    path: l.path,
    category: 'Admissions',
    keywords: l.label,
  })),
  ...academicNavLinks.map((l) => ({
    title: l.label,
    path: l.path,
    category: l.group,
    keywords: l.label,
  })),
];

export function filterSearchResults(query, limit = 8) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return searchIndex
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
    )
    .slice(0, limit);
}
