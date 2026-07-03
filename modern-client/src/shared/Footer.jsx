import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import icon from '../assets/education.png';

const footerLinks = {
  quick: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/' },
    { label: 'Programs', path: '/programs' },
    { label: 'Events', path: '/events' },
    { label: 'News', path: '/news' },
  ],
  academics: [
    { label: 'All Programs', path: '/programs' },
    { label: 'Departments', path: '/' },
    { label: 'Faculty', path: '/' },
    { label: 'Academic Calendar', path: '/events' },
    { label: 'Library', path: '/' },
  ],
  admissions: [
    { label: 'How to Apply', path: '/programs' },
    { label: 'Scholarships', path: '/news' },
    { label: 'Tuition & Fees', path: '/programs' },
    { label: 'International Students', path: '/news' },
    { label: 'Campus Tour', path: '/' },
  ],
};

const socialLinks = [
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main footer */}
      <div className="mx-auto w-11/12 max-w-7xl py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img className="h-10 w-10" src={icon} alt="Modern University" />
              <span className="text-xl font-bold text-white">Modern University</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              A premier academic institution dedicated to excellence in education,
              research, and innovation — shaping leaders since 1992.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                123 University Avenue, Dhaka 1200, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-emerald-400" />
                +880 1234-567890
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-emerald-400" />
                info@modernuniversity.edu
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Academics
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.academics.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Admissions
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.admissions.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
              <p className="mt-1 text-sm text-gray-400">
                Subscribe for campus news, events, and admission updates.
              </p>
            </div>
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/10 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-11/12 max-w-7xl flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © {new Date().getFullYear()} Modern University Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="/" className="hover:text-emerald-400">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-emerald-400">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
