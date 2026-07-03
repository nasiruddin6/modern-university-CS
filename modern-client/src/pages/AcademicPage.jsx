import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  academicNavGroups,
  academicNavLinks,
  academicsPages,
} from '../data/academicsContent';

const AcademicPage = () => {
  const location = useLocation();
  const page = academicsPages[location.pathname];

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-gray-50 pb-16 pt-28">
      <div className="mx-auto w-11/12 max-w-7xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                Academics
              </h2>
              <nav className="mt-4 space-y-5">
                {academicNavGroups.map((group) => (
                  <div key={group}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {group}
                    </p>
                    <div className="space-y-1">
                      {academicNavLinks
                        .filter((link) => link.group === group)
                        .map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                              location.pathname === link.path
                                ? 'bg-emerald-50 font-semibold text-emerald-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                {page.category}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                {page.title}
              </h1>
              <p className="mt-3 text-lg text-gray-500">{page.subtitle}</p>

              <div className="mt-8 space-y-8">
                {page.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-500"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {page.cta && (
                <div className="mt-10 border-t border-gray-100 pt-8">
                  <Link
                    to={page.cta.path}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
                  >
                    {page.cta.label}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AcademicPage;
