import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NewsCard from '../NewsCard';
import { newsApi } from '../../api/client';
import { featuredNews as fallbackNews } from '../../data/news';

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState(fallbackNews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    newsApi
      .getAll('?featured=true')
      .then((res) => {
        if (res.data?.length) setNewsItems(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Stay Updated
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Latest <span className="text-emerald-600">News</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Announcements, achievements, and stories from across Modern University.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            View All News Posts
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
