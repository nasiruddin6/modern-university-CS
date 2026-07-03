import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';

const EventCard = ({ event }) => (
  <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="relative h-56 overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute left-4 top-4 rounded-xl bg-emerald-600 px-3 py-2 text-center text-white shadow-lg">
        <p className="text-2xl font-bold leading-none">{event.day}</p>
        <p className="text-xs font-semibold uppercase">{event.month}</p>
      </div>
      {event.category && (
        <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {event.category}
        </span>
      )}
    </div>

    <div className="p-5">
      <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
        {event.title}
      </h3>

      <div className="mt-3 space-y-2 text-sm text-gray-500">
        <p className="flex items-center gap-2">
          <Clock size={15} className="shrink-0 text-emerald-500" />
          {event.time} · {event.year}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={15} className="shrink-0 text-emerald-500" />
          {event.location}
        </p>
        <p className="flex items-center gap-2">
          <User size={15} className="shrink-0 text-emerald-500" />
          {event.speaker}
        </p>
      </div>
    </div>
  </article>
);

export default EventCard;
