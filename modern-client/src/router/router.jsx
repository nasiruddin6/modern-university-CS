import {
  createBrowserRouter,
} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import AdminLayout from '../layout/AdminLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../components/Home';
import AllPrograms from '../pages/AllPrograms';
import EventCalendar from '../pages/EventCalendar';
import AllNews from '../pages/AllNews';
import Campus from '../pages/Campus';
import Contact from '../pages/Contact';
import AdmissionPage from '../pages/AdmissionPage';
import AcademicPage from '../pages/AcademicPage';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageNotices from '../pages/admin/ManageNotices';
import ManageNews from '../pages/admin/ManageNews';
import ManageEvents from '../pages/admin/ManageEvents';
import ManageFaculty from '../pages/admin/ManageFaculty';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/programs', element: <AllPrograms /> },
      { path: '/events', element: <EventCalendar /> },
      { path: '/news', element: <AllNews /> },
      { path: '/campus', element: <Campus /> },
      { path: '/contacts', element: <Contact /> },
      { path: '/login', element: <Login /> },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute roles={['student', 'teacher', 'admin']}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      { path: '/scholarships', element: <AdmissionPage pageKey="scholarships" /> },
      { path: '/admissions/:slug', element: <AdmissionPage /> },
      { path: '/programs/:slug', element: <AcademicPage /> },
      { path: '/faculties/:slug', element: <AcademicPage /> },
      { path: '/academics/:slug', element: <AcademicPage /> },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute roles={['admin']}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'notices', element: <ManageNotices /> },
      { path: 'news', element: <ManageNews /> },
      { path: 'events', element: <ManageEvents /> },
      { path: 'faculty', element: <ManageFaculty /> },
    ],
  },
]);

export default router;
