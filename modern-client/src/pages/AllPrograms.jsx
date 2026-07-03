import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProgramCard from '../components/ProgramCard';
import { programsApi } from '../api/client';
import { programs as fallbackPrograms } from '../data/programs';

const AllPrograms = () => {
  const [programs, setPrograms] = useState(fallbackPrograms);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    programsApi
      .getAll()
      .then((res) => {
        if (res.data?.length) setPrograms(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const programCategories = useMemo(
    () => [...new Set(programs.map((p) => p.category))],
    [programs]
  );

  const filteredPrograms = useMemo(() => {
    if (activeCategory === 'All') return programs;
    return programs.filter((p) => p.category === activeCategory);
  }, [activeCategory, programs]);

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

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            All Programs
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Every Academic Program
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Browse {programs.length} undergraduate programs across engineering,
            business, humanities, law, and more at Modern University.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {['All', ...programCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} variant="light" />
            ))}
          </div>
        )}

        {!loading && filteredPrograms.length === 0 && (
          <p className="py-12 text-center text-gray-500">No programs found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default AllPrograms;
