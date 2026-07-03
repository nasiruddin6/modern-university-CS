import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, Newspaper, Users } from 'lucide-react';
import { eventsApi, facultyApi, newsApi, noticesApi } from '../../api/client';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ notices: 0, news: 0, events: 0, faculty: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      noticesApi.getAll(),
      newsApi.getAll(),
      eventsApi.getAll(),
      facultyApi.getAll(),
    ])
      .then(([notices, news, events, faculty]) => {
        setStats({
          notices: notices.data.length,
          news: news.data.length,
          events: events.data.length,
          faculty: faculty.data.length,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    { label: 'Notices', count: stats.notices, icon: Bell, to: '/admin/notices', color: 'bg-red-500' },
    { label: 'News', count: stats.news, icon: Newspaper, to: '/admin/news', color: 'bg-blue-500' },
    { label: 'Events', count: stats.events, icon: Calendar, to: '/admin/events', color: 'bg-purple-500' },
    { label: 'Faculty', count: stats.faculty, icon: Users, to: '/admin/faculty', color: 'bg-emerald-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-1 text-gray-500">Manage your university content from here.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ label, count, icon: Icon, to, color }) => (
          <Link
            key={label}
            to={to}
            className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className={`mb-4 inline-flex rounded-xl ${color} p-3 text-white`}>
              <Icon size={22} />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {loading ? '—' : count}
            </p>
            <p className="mt-1 text-sm text-gray-500 group-hover:text-emerald-600">{label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
