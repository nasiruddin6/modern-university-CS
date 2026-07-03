import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    image: '/images/banner/campus-1.jpg',
    title: (
      <>
        Welcome to the Modern <br /> University
      </>
    ),
    subtitle:
      'Any prominent career starts with good education. Together with us, you will have an opportunity of getting better and deeper knowledge of the subjects that can build your future.',
    primaryBtn: 'Sign Up for Excursion',
    primaryLink: '/admissions/open-days',
    secondaryBtn: 'Learn More',
    secondaryLink: '/campus',
    titleClass: 'text-center text-4xl sm:text-5xl lg:text-6xl font-bold',
  },
  {
    id: 2,
    image: '/images/banner/campus-2.jpg',
    title: 'Explore Our Campus',
    subtitle:
      'Discover world-class facilities, vibrant student life, and a diverse community dedicated to academic excellence.',
    primaryBtn: 'Visit Now',
    primaryLink: '/campus',
    secondaryBtn: 'Get Started',
    secondaryLink: '/admissions/apply',
    titleClass: 'text-4xl sm:text-5xl font-bold',
  },
  {
    id: 3,
    image: '/images/banner/campus-3.jpg',
    title: 'Shape Your Future With Us',
    subtitle:
      'Join thousands of students pursuing degrees across engineering, business, law, and the arts.',
    primaryBtn: 'View Programs',
    primaryLink: '/programs',
    secondaryBtn: 'Apply Now',
    secondaryLink: '/admissions/apply',
    titleClass: 'text-4xl sm:text-5xl font-bold',
  },
];

const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="h-screen w-full">
      <Swiper
        navigation
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        speed={500}
        modules={[Navigation, Autoplay]}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              <img
                src={slide.image}
                alt={`University banner ${slide.id}`}
                className="h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 px-4 text-white">
                <h1
                  className={`${slide.titleClass} transform transition-all duration-500 ${
                    loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`mt-4 w-full max-w-3xl text-center text-base sm:text-lg transform transition-all duration-500 delay-100 ${
                    loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {slide.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    to={slide.primaryLink}
                    className={`rounded-lg bg-black/80 px-6 py-2 text-white transition-all duration-500 delay-200 hover:bg-emerald-600 ${
                      loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {slide.primaryBtn}
                  </Link>
                  <Link
                    to={slide.secondaryLink}
                    className={`rounded-lg bg-emerald-600 px-6 py-2 text-white transition-all duration-500 delay-300 hover:bg-emerald-700 ${
                      loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    {slide.secondaryBtn}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
