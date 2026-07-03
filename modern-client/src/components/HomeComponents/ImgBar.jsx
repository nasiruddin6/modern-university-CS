import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/images/banner/campus-1.jpg', caption: 'University Library' },
  { id: 2, src: '/images/banner/campus-2.jpg', caption: 'Main Campus Building' },
  { id: 3, src: '/images/banner/campus-3.jpg', caption: 'Graduation Day' },
  { id: 4, src: '/images/programs/cse.jpg', caption: 'Engineering Lab' },
  { id: 5, src: '/images/programs/sports.jpg', caption: 'Sports Complex' },
  { id: 6, src: '/images/programs/english.jpg', caption: 'Student Study Hall' },
];

const ImgBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Campus Gallery
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Life at Modern University
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Explore our vibrant campus through classrooms, labs, sports facilities,
            and memorable student moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 0 ? 'h-72 sm:h-full sm:min-h-[420px]' : 'h-56'
                }`}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Expand className="text-white" size={22} />
                </span>
              </div>
              <p className="absolute bottom-0 left-0 right-0 p-4 text-left text-sm font-semibold text-white">
                {item.caption}
              </p>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-5xl text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].caption}
              className="max-h-[80vh] w-full rounded-xl object-contain shadow-2xl"
            />
            <p className="mt-4 text-lg font-medium text-white">
              {galleryImages[selectedIndex].caption}
            </p>
          </div>

          <button
            type="button"
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ImgBar;
