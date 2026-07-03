import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import { newsApi } from '../api/client';
import { newsItems as fallbackNews } from '../data/news';

const AllNews = () => {
  const [newsItems, setNewsItems] = useState(fallbackNews);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    newsApi
      .getAll()
      .then((res) => {
        if (res.data?.length) setNewsItems(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const newsCategories = useMemo(
    () => [...new Set(newsItems.map((item) => item.category))],
    [newsItems]
  );

  const filteredNews = useMemo(() => {
    if (activeCategory === 'All') return newsItems;
    return newsItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, newsItems]);

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
            News & Updates
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            All News Posts
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Read {newsItems.length} stories about rankings, research, campus
            events, and achievements at Modern University.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {['All', ...newsCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {!loading && filteredNews.length === 0 && (
          <p className="py-12 text-center text-gray-500">No news in this category.</p>
        )}
      </div>
    </div>
  );
};

export default AllNews;
