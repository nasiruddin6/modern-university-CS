const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTH_FULL = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const formatRelativeDate = (date) => {
  const now = new Date();
  const diffMs = now - new Date(date);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return 'Today';
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return '1 week ago';
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return '1 month ago';
  return `${Math.floor(diffDays / 30)} months ago`;
};

export const formatNews = (item) => ({
  id: item._id,
  title: item.title,
  category: item.category,
  excerpt: item.excerpt,
  image: item.image,
  featured: item.featured,
  date: formatRelativeDate(item.publishedAt),
  publishedAt: item.publishedAt,
});

export const formatEvent = (item) => {
  const d = new Date(item.eventDate);
  return {
    id: item._id,
    day: String(d.getDate()).padStart(2, '0'),
    month: MONTH_SHORT[d.getMonth()],
    monthFull: MONTH_FULL[d.getMonth()],
    year: String(d.getFullYear()),
    time: item.time,
    title: item.title,
    speaker: item.speaker,
    location: item.location,
    image: item.image,
    category: item.category,
    eventDate: item.eventDate,
  };
};

export const formatNotice = (item) => ({
  id: item._id,
  text: item.text,
  path: item.path,
  isActive: item.isActive,
  order: item.order,
});

export const formatFaculty = (item) => ({
  id: item._id,
  name: item.name,
  designation: item.designation,
  department: item.department,
  photo: item.photo,
  social: item.social,
});

export const formatProgram = (item) => ({
  id: item.slug,
  slug: item.slug,
  title: item.title,
  category: item.category,
  description: item.description,
  image: item.image,
  coordinator: item.coordinator,
  duration: item.duration,
  semester: item.semester,
  featured: item.featured,
});

export const formatUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  studentId: user.studentId,
  department: user.department,
  designation: user.designation,
});
