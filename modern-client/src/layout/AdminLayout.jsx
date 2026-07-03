import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  Bell,
  Calendar,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Newspaper,
  Users,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/notices', label: 'Notices', icon: Bell },
  { to: '/admin/news', label: 'News', icon: Newspaper },
  { to: '/admin/events', label: 'Events', icon: Calendar },
  { to: '/admin/faculty', label: 'Faculty', icon: Users },
];

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-gray-200 bg-white">
        <div className="border-b border-gray-100 px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="text-emerald-600" size={28} />
            <div>
              <p className="text-sm font-bold text-gray-900">Admin Panel</p>
              <p className="text-xs text-gray-500">Modern University</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-100 p-4">
          <p className="mb-3 truncate px-2 text-xs text-gray-500">{user?.email}</p>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="ml-64 min-h-screen p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
