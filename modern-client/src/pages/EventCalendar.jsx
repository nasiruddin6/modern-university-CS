import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EventCard from '../components/EventCard';
import { eventsApi } from '../api/client';
import { events as fallbackEvents } from '../data/events';

const EventCalendar = () => {
  const [events, setEvents] = useState(fallbackEvents);
  const [loading, setLoading] = useState(true);
  const [activeMonth, setActiveMonth] = useState('All');

  useEffect(() => {
    eventsApi
      .getAll()
      .then((res) => {
        if (res.data?.length) setEvents(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const eventMonths = useMemo(
    () => [...new Set(events.map((e) => `${e.monthFull} ${e.year}`))],
    [events]
  );

  const filteredEvents = useMemo(() => {
    if (activeMonth === 'All') return events;
    return events.filter((e) => `${e.monthFull} ${e.year}` === activeMonth);
  }, [activeMonth, events]);

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
            Event Calendar
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            All Upcoming Events
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Browse {events.length} campus events — conferences, workshops,
            exhibitions, and open days at Modern University.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveMonth('All')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeMonth === 'All'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-emerald-50 hover:text-emerald-700'
            }`}
          >
            All
          </button>
          {eventMonths.map((month) => (
            <button
              key={month}
              type="button"
              onClick={() => setActiveMonth(month)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeMonth === month
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        {!loading && filteredEvents.length === 0 && (
          <p className="py-12 text-center text-gray-500">No events in this month.</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
