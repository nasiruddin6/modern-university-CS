import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Cpu,
  Landmark,
  LayoutGrid,
  Scale,
  Zap,
} from 'lucide-react';

const departments = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    students: 3200,
    icon: Cpu,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'eee',
    name: 'Electrical & Electronic Engineering',
    shortName: 'EEE',
    students: 2100,
    icon: Zap,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    id: 'bba',
    name: 'Business Administration',
    shortName: 'BBA',
    students: 2800,
    icon: Briefcase,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'law',
    name: 'Law',
    shortName: 'Law',
    students: 950,
    icon: Scale,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    id: 'english',
    name: 'English',
    shortName: 'English',
    students: 1200,
    icon: BookOpen,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    id: 'architecture',
    name: 'Architecture',
    shortName: 'Architecture',
    students: 780,
    icon: Landmark,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
];

const DepartmentCard = ({ dept }) => {
  const Icon = dept.icon;

  return (
    <div className="group relative cursor-pointer rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md">
      <ArrowRight
        size={20}
        className="absolute right-5 top-5 text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2"
        aria-hidden="true"
      />

      <div className={`mb-4 inline-flex rounded-xl p-3 ${dept.bg}`}>
        <Icon className={`h-7 w-7 ${dept.color}`} />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
        {dept.shortName}
      </p>
      <h3 className="mt-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
        {dept.name}
      </h3>
      <p className="mt-3 text-sm text-gray-500">
        <span className="font-semibold text-gray-800">
          {dept.students.toLocaleString()}+
        </span>{' '}
        students enrolled
      </p>
    </div>
  );
};

const DepartmentsSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3">
            <LayoutGrid className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Academic Departments
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Our Departments
          </h2>
          <p className="mt-3 max-w-xl text-gray-500">
            Discover diverse faculties shaping future leaders across engineering,
            business, law, humanities, and design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
