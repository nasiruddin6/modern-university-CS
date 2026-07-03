import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProgramCard from '../ProgramCard';
import { programsApi } from '../../api/client';
import { featuredPrograms as fallbackPrograms } from '../../data/programs';

const OurProgram = () => {
  const [programs, setPrograms] = useState(fallbackPrograms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    programsApi
      .getAll('?featured=true')
      .then((res) => {
        if (res.data?.length) setPrograms(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />

      <div className="relative mx-auto w-11/12 max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Academics
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            Featured programs selected through a rigorous process and uniquely
            designed for each semester to prepare students for global careers.
          </p>
        </div>

        {loading ? (
          <div className="mt-12 flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} variant="dark" />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            View All Programs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
