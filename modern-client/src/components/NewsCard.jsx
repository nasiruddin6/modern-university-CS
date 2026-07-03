import React from 'react';
import { Clock } from 'lucide-react';

const NewsCard = ({ item }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="relative h-52 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
        {item.category}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
        {item.excerpt}
      </p>
      <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-gray-400">
        <Clock size={14} />
        {item.date}
      </p>
    </div>
  </article>
);

export default NewsCard;
