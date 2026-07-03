import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import EventCard from '../EventCard';
import { eventsApi } from '../../api/client';
import { featuredEvents as fallbackEvents } from '../../data/events';

const Events = () => {
  const [events, setEvents] = useState(fallbackEvents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    eventsApi
      .getAll('?limit=4')
      .then((res) => {
        if (res.data?.length) setEvents(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Campus Life
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Conferences, workshops, and exhibitions that bring our academic
            community together.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            <Calendar size={18} />
            View Event Calendar
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
