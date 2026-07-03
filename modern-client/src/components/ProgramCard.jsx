import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';

const ProgramCard = ({ program, variant = 'dark' }) => {
  const isDark = variant === 'dark';

  return (
    <article
      className={`group overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDark
          ? 'border-white/10 bg-slate-800/80'
          : 'border-gray-100 bg-white'
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
          {program.category}
        </span>
      </div>

      <div className={`p-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {program.semester}
        </p>
        <h3 className="mt-1 text-xl font-bold">{program.title}</h3>
        <p className={`mt-2 line-clamp-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {program.description}
        </p>

        <div className={`mt-4 flex flex-wrap items-center gap-4 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <span className="flex items-center gap-1">
            <User size={14} />
            {program.coordinator}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {program.duration}
          </span>
        </div>

        <Link
          to="/programs"
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
        >
          View Details
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default ProgramCard;
