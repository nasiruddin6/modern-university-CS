import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, LogIn, Search, User, X } from 'lucide-react';
import icon from '../assets/education.png';
import { filterSearchResults } from '../data/searchIndex';
import { useAuth } from '../context/AuthContext';

const megaMenus = {
  academics: {
    label: 'Academics',
    description: 'World-class programs designed to shape tomorrow\'s leaders.',
    columns: [
      {
        title: 'Programs',
        links: [
          { name: 'Undergraduate', path: '/programs/undergraduate' },
          { name: 'Graduate', path: '/programs/graduate' },
          { name: 'Doctoral Studies', path: '/programs/doctoral' },
          { name: 'Online Learning', path: '/programs/online' },
        ],
      },
      {
        title: 'Faculties',
        links: [
          { name: 'Engineering', path: '/faculties/engineering' },
          { name: 'Business', path: '/faculties/business' },
          { name: 'Arts & Sciences', path: '/faculties/arts' },
          { name: 'Medicine', path: '/faculties/medicine' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Academic Calendar', path: '/academics/calendar' },
          { name: 'Library', path: '/academics/library' },
          { name: 'Research Centers', path: '/academics/research' },
          { name: 'Student Support', path: '/academics/support' },
        ],
      },
    ],
  },
  admissions: {
    label: 'Admissions',
    description: 'Start your journey — we\'re here to guide every step.',
    columns: [
      {
        title: 'Apply',
        links: [
          { name: 'How to Apply', path: '/admissions/apply' },
          { name: 'Requirements', path: '/admissions/requirements' },
          { name: 'Deadlines', path: '/admissions/deadlines' },
          { name: 'Transfer Students', path: '/admissions/transfer' },
        ],
      },
      {
        title: 'Financing',
        links: [
          { name: 'Tuition & Fees', path: '/admissions/tuition' },
          { name: 'Scholarships', path: '/scholarships' },
          { name: 'Financial Aid', path: '/admissions/financial-aid' },
          { name: 'Payment Plans', path: '/admissions/payment' },
        ],
      },
      {
        title: 'Visit',
        links: [
          { name: 'Campus Tours', path: '/campus' },
          { name: 'Open Days', path: '/admissions/open-days' },
          { name: 'International Students', path: '/admissions/international' },
          { name: 'Contact Admissions', path: '/contacts' },
        ],
      },
    ],
  },
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Campus', path: '/campus' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contacts' },
];

const HamburgerButton = ({ open, onClick, light }) => (
  <button
    type="button"
    aria-label={open ? 'Close menu' : 'Open menu'}
    aria-expanded={open}
    onClick={onClick}
    className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
  >
    <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
    <span className="relative block h-5 w-6">
      <span
        className={`absolute left-0 top-0 block h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out ${
          light ? 'bg-white' : 'bg-gray-800'
        } ${open ? 'top-2 rotate-45' : ''}`}
      />
      <span
        className={`absolute left-0 top-2 block h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out ${
          light ? 'bg-white' : 'bg-gray-800'
        } ${open ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`absolute left-0 top-4 block h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out ${
          light ? 'bg-white' : 'bg-gray-800'
        } ${open ? 'top-2 -rotate-45' : ''}`}
      />
    </span>
  </button>
);

const MegaDropdown = ({ menu, isOpen, onOpen, onClose, solidNav }) => (
  <div
    className="relative"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <button
      type="button"
      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
        solidNav ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'
      } ${isOpen ? (solidNav ? 'text-emerald-600' : 'text-white') : ''}`}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      {menu.label}
      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>

    <div
      className={`absolute left-1/2 top-full z-50 w-[min(90vw,56rem)] -translate-x-1/2 pt-4 transition-all duration-300 ${
        isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
        <div className="border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-white px-8 py-6">
          <h3 className="text-lg font-semibold text-gray-900">{menu.label}</h3>
          <p className="mt-1 text-sm text-gray-500">{menu.description}</p>
        </div>
        <div className="grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
          {menu.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className="block rounded-lg px-2 py-1.5 text-sm text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                      onClick={onClose}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();
  const searchInputRef = useRef(null);
  const isHome = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(
    () => filterSearchResults(searchQuery),
    [searchQuery]
  );

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  const openSearch = () => {
    setMobileOpen(false);
    setSearchOpen(true);
  };

  const handleSearchSelect = (path) => {
    navigate(path);
    closeSearch();
    closeMobile();
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeSearch();
    };
    if (searchOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [searchOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    closeSearch();
    setActiveMega(null);
    setScrolled(window.scrollY > 24);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAccordion(null);
  };

  const solidNav = scrolled || mobileOpen || !isHome;
  const lightText = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ease-out ${
        solidNav ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2" onClick={closeMobile}>
          <img className="h-9 w-9" src={icon} alt="Modern University" />
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              lightText ? 'text-white' : 'text-gray-900'
            }`}
          >
            Modern University
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? solidNav ? 'text-emerald-600' : 'text-white'
                  : solidNav ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>

          {Object.entries(megaMenus).map(([key, menu]) => (
            <MegaDropdown
              key={key}
              menu={menu}
              isOpen={activeMega === key}
              onOpen={() => setActiveMega(key)}
              onClose={() => setActiveMega(null)}
              solidNav={solidNav}
            />
          ))}

          {navLinks.slice(1).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? solidNav ? 'text-emerald-600' : 'text-white'
                    : solidNav ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => (searchOpen ? closeSearch() : openSearch())}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              lightText
                ? 'text-white/90 hover:bg-white/10'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Search size={18} />
            <span className="hidden sm:inline">Search</span>
          </button>

          <Link
            to={user ? (isAdmin ? '/admin' : '/dashboard') : '/login'}
            className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 lg:inline-flex ${
              lightText
                ? 'text-white/90 hover:bg-white/10'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {user ? <User size={18} /> : <LogIn size={18} />}
            <span>{user ? 'Portal' : 'Login'}</span>
          </Link>

          <Link
            to="/admissions/apply"
            className={`hidden rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 lg:block ${
              lightText
                ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            Apply Now
          </Link>

          <HamburgerButton
            open={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            light={lightText}
          />
        </div>
      </nav>

      {/* Search panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          searchOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-4 pb-4">
          <form
            className="mx-auto w-11/12 max-w-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              if (searchResults.length > 0) {
                handleSearchSelect(searchResults[0].path);
              }
            }}
          >
            <div className="flex items-center gap-3 border-b border-gray-100 py-2">
              <Search size={18} className="shrink-0 text-gray-400" />
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search programs, news, events, admissions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-0 bg-transparent py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={closeSearch}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            {searchQuery.trim() && (
              <div className="mt-2 max-h-64 overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-lg">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((result) => (
                      <li key={`${result.path}-${result.title}`}>
                        <button
                          type="button"
                          onClick={() => handleSearchSelect(result.path)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-emerald-50"
                        >
                          <span className="text-sm font-medium text-gray-800">
                            {result.title}
                          </span>
                          <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                            {result.category}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-6 text-center text-sm text-gray-500">
                    No results found for &ldquo;{searchQuery}&rdquo;
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMobile}
        aria-hidden={!mobileOpen}
      />
      <div
        className={`fixed right-0 top-[72px] z-40 flex h-[calc(100vh-72px)] w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          <NavLink
            to="/"
            onClick={closeMobile}
            className="rounded-xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Home
          </NavLink>

          {Object.entries(megaMenus).map(([key, menu]) => (
            <div key={key} className="overflow-hidden rounded-xl">
              <button
                type="button"
                onClick={() => setMobileAccordion((prev) => (prev === key ? null : key))}
                className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-emerald-50"
              >
                {menu.label}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    mobileAccordion === key ? 'rotate-180 text-emerald-600' : 'text-gray-400'
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  mobileAccordion === key ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 px-4 pb-4">
                    {menu.columns.map((column) => (
                      <div key={column.title}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                          {column.title}
                        </p>
                        <ul className="space-y-1">
                          {column.links.map((link) => (
                            <li key={link.path}>
                              <NavLink
                                to={link.path}
                                onClick={closeMobile}
                                className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                              >
                                {link.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {navLinks.slice(1).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobile}
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="mt-auto border-t border-gray-100 p-4">
          <button
            type="button"
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium text-gray-700"
            onClick={openSearch}
          >
            <Search size={18} />
            Search
          </button>
          <Link
            to={user ? (isAdmin ? '/admin' : '/dashboard') : '/login'}
            onClick={closeMobile}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium text-gray-700"
          >
            {user ? <User size={18} /> : <LogIn size={18} />}
            {user ? 'Portal' : 'Login'}
          </Link>
          <Link
            to="/admissions/apply"
            onClick={closeMobile}
            className="flex w-full items-center justify-center rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
