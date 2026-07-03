import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, LogOut, Settings, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout, isAdmin, isTeacher, isStudent } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const roleLabel = {
    admin: 'Administrator',
    teacher: 'Faculty Member',
    student: 'Student',
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-28">
      <div className="mx-auto w-11/12 max-w-4xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-10 text-white">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <User size={32} />
              </div>
              <div>
                <p className="text-sm text-emerald-100">{roleLabel[user.role]}</p>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-sm text-emerald-100">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-8 sm:grid-cols-2">
            {isStudent && (
              <>
                <InfoCard label="Student ID" value={user.studentId || 'N/A'} />
                <InfoCard label="Department" value={user.department || 'N/A'} />
              </>
            )}
            {isTeacher && (
              <>
                <InfoCard label="Designation" value={user.designation || 'N/A'} />
                <InfoCard label="Department" value={user.department || 'N/A'} />
              </>
            )}
            {isAdmin && (
              <div className="sm:col-span-2">
                <Link
                  to="/admin"
                  className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-5 transition-colors hover:bg-emerald-100"
                >
                  <Settings className="text-emerald-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Admin Panel</p>
                    <p className="text-sm text-gray-500">
                      Manage notices, news, events, and faculty
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 px-8 py-6">
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>

        {isStudent && (
          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-emerald-600" size={28} />
              <div>
                <h2 className="text-lg font-bold text-gray-900">Student Portal</h2>
                <p className="text-sm text-gray-500">
                  View your courses, grades, and campus announcements from here.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</p>
    <p className="mt-1 text-lg font-semibold text-gray-900">{value}</p>
  </div>
);

export default Dashboard;
