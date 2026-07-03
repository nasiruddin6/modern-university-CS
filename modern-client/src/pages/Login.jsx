import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const roleTabs = [
  { key: 'student', label: 'Student', icon: User },
  { key: 'teacher', label: 'Teacher', icon: User },
  { key: 'admin', label: 'Admin', icon: Lock },
];

const Login = () => {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') || 'student';
  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const user = await login({ email, password, role });
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const demoCredentials = {
    student: { email: 'student@university.edu', password: 'student123' },
    teacher: { email: 'teacher@university.edu', password: 'teacher123' },
    admin: { email: 'admin@university.edu', password: 'admin123' },
  };

  const fillDemo = () => {
    const creds = demoCredentials[role];
    setEmail(creds.email);
    setPassword(creds.password);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="mx-auto w-11/12 max-w-md pb-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-8 text-center text-white">
            <h1 className="text-2xl font-bold">Portal Login</h1>
            <p className="mt-2 text-sm text-emerald-100">
              Sign in to your Modern University account
            </p>
          </div>

          <div className="flex border-b border-gray-100">
            {roleTabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setRole(key)}
                className={`flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                  role === key
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-8">
            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 disabled:opacity-60"
            >
              {submitting ? 'Signing in...' : `Sign in as ${role}`}
            </button>

            <button
              type="button"
              onClick={fillDemo}
              className="w-full text-sm text-emerald-600 hover:text-emerald-700"
            >
              Use demo credentials
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
