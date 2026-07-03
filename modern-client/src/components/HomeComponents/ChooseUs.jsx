import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Award, Building2, CheckCircle2, GraduationCap, Users } from 'lucide-react';
import groupImg from '../../assets/business-people-meeting.jpg';

const highlights = [
  'Internationally recognized faculty',
  'Modern labs & digital library',
  'Industry-linked career support',
  'Vibrant multicultural campus',
];

const stats = [
  {
    id: 'awards',
    label: 'Awards',
    end: 15,
    suffix: '',
    icon: Award,
    bg: 'bg-emerald-500/10',
    color: 'text-emerald-400',
  },
  {
    id: 'teachers',
    label: 'Certified Teachers',
    end: 30,
    suffix: '+',
    icon: GraduationCap,
    bg: 'bg-blue-500/10',
    color: 'text-blue-400',
  },
  {
    id: 'programs',
    label: 'Featured Programs',
    end: 10,
    suffix: '',
    icon: Building2,
    bg: 'bg-violet-500/10',
    color: 'text-violet-400',
  },
  {
    id: 'students',
    label: 'Students',
    end: 600,
    suffix: '',
    icon: Users,
    bg: 'bg-amber-500/10',
    color: 'text-amber-400',
  },
];

const StatItem = ({ stat, animate }) => {
  const Icon = stat.icon;

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/10">
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${stat.bg}`}>
        <Icon className={`h-7 w-7 ${stat.color}`} />
      </div>
      <div>
        <p className={`text-3xl font-bold ${stat.color}`}>
          {animate ? (
            <CountUp start={0} end={stat.end} duration={1.2} separator="," />
          ) : (
            '0'
          )}
          {stat.suffix}
        </p>
        <p className="text-sm font-medium text-gray-300">{stat.label}</p>
      </div>
    </div>
  );
};

const ChooseUs = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto grid w-11/12 max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            A University Built for{' '}
            <span className="text-emerald-400">Your Success</span>
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Modern University is a leading higher educational establishment offering
            students from all over the world a chance to obtain new knowledge, learn
            useful skills, and build lifelong connections.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300 sm:text-base">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatItem key={stat.id} stat={stat} animate={animate} />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/10 blur-sm" />
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              className="h-full w-full object-cover"
              src={groupImg}
              alt="Students and faculty collaborating at Modern University"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-lg font-semibold text-white">Learn. Grow. Lead.</p>
              <p className="mt-1 text-sm text-gray-300">
                Join a community of ambitious learners and expert mentors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
