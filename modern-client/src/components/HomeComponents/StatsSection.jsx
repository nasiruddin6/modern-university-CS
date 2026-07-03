import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Award, Building2, GraduationCap, Users } from 'lucide-react';

const stats = [
  {
    id: 'students',
    label: 'Students',
    end: 15000,
    suffix: '+',
    icon: GraduationCap,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'faculty',
    label: 'Faculty',
    end: 500,
    suffix: '+',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'departments',
    label: 'Departments',
    end: 50,
    suffix: '+',
    icon: Building2,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    id: 'years',
    label: 'Years of Excellence',
    end: 25,
    suffix: '+',
    icon: Award,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

const StatCard = ({ stat, animate }) => {
  const Icon = stat.icon;

  return (
    <div
      className={`group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className={`mb-4 inline-flex rounded-xl p-3 ${stat.bg}`}>
        <Icon className={`h-7 w-7 ${stat.color}`} />
      </div>
      <p className={`text-4xl font-bold tracking-tight ${stat.color}`}>
        {animate ? (
          <CountUp start={0} end={stat.end} duration={1.2} separator="," />
        ) : (
          '0'
        )}
        <span>{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Our Impact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Modern University at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StatCard stat={stat} animate={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
