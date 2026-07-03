import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Building2,
  Dumbbell,
  FlaskConical,
  MapPin,
  Users,
} from 'lucide-react';

const facilities = [
  {
    icon: Building2,
    title: 'Modern Classrooms',
    description: 'Smart classrooms with digital boards and high-speed Wi-Fi across campus.',
  },
  {
    icon: BookOpen,
    title: 'Central Library',
    description: '500,000+ books, digital archives, and 24/7 study zones for students.',
  },
  {
    icon: FlaskConical,
    title: 'Research Labs',
    description: 'Advanced labs for engineering, science, and medical research programs.',
  },
  {
    icon: Dumbbell,
    title: 'Sports Complex',
    description: 'Indoor gym, football field, cricket ground, and Olympic-size swimming pool.',
  },
  {
    icon: Users,
    title: 'Student Housing',
    description: 'Safe, comfortable dormitories with dining halls and recreation areas.',
  },
  {
    icon: MapPin,
    title: 'Green Campus',
    description: '50-acre eco-friendly campus with gardens, walkways, and open study spaces.',
  },
];

const gallery = [
  { src: '/images/banner/campus-1.jpg', caption: 'University Library' },
  { src: '/images/banner/campus-2.jpg', caption: 'Main Academic Building' },
  { src: '/images/banner/campus-3.jpg', caption: 'Graduation Ceremony' },
  { src: '/images/programs/sports.jpg', caption: 'Sports Facilities' },
];

const Campus = () => {
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

        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="/images/banner/campus-2.jpg"
            alt="Modern University Campus"
            className="h-64 w-full object-cover sm:h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Our Campus
            </p>
            <h1 className="mt-2 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              Explore Modern University Campus
            </h1>
            <p className="mt-3 max-w-lg text-sm text-gray-200 sm:text-base">
              World-class facilities, vibrant student life, and a inspiring environment
              for learning and growth.
            </p>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Campus Facilities</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Everything you need for academic success and an enriching university experience.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Campus Gallery</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div key={item.caption} className="group overflow-hidden rounded-xl">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit CTA */}
        <div className="mt-14 rounded-2xl bg-slate-900 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-white">Plan Your Campus Visit</h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-400">
            Schedule a guided tour and experience Modern University firsthand.
            Open days run every Saturday from 10 AM to 4 PM.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/events"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              View Open Days
            </Link>
            <Link
              to="/contacts"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
