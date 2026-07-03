import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { facultyApi } from '../../api/client';
import 'swiper/css';

const fallbackFaculty = [
  {
    id: 1,
    name: 'Dr. Sarah Rahman',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format&q=75',
    social: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      email: 'mailto:sarah.rahman@university.edu',
    },
  },
];

const socialLinks = [
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'facebook', icon: Facebook, label: 'Facebook' },
  { key: 'twitter', icon: Twitter, label: 'Twitter' },
  { key: 'email', icon: Mail, label: 'Email' },
];

const FacultyCard = ({ member }) => (
  <div className="group relative mx-auto flex h-full max-w-xs flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 pb-6 pt-16 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
    <img
      src={member.photo}
      alt={member.name}
      className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white object-cover shadow-md ring-2 ring-emerald-100 transition-transform duration-200 group-hover:scale-105"
      loading="lazy"
      decoding="async"
      width={112}
      height={112}
    />

    <div className="text-center">
      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-emerald-600">{member.designation}</p>
      <p className="mt-2 text-xs leading-relaxed text-gray-500">{member.department}</p>
    </div>

    <div className="mt-5 flex items-center gap-3">
      {socialLinks.map(({ key, icon: Icon, label }) => (
        <a
          key={key}
          href={member.social[key]}
          target={key === 'email' ? undefined : '_blank'}
          rel={key === 'email' ? undefined : 'noopener noreferrer'}
          aria-label={`${member.name} on ${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-colors hover:bg-emerald-600 hover:text-white"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  </div>
);

const FacultyShowcase = () => {
  const [sectionRef, inView] = useInView();
  const [facultyMembers, setFacultyMembers] = useState(fallbackFaculty);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    facultyApi
      .getAll()
      .then((res) => {
        if (res.data?.length) setFacultyMembers(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Our Faculty
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Expert Faculty
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Dedicated educators and researchers committed to academic excellence
            across every department.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            autoplay={
              inView
                ? { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }
                : false
            }
            loop
            speed={400}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-4 !pt-14"
          >
            {facultyMembers.map((member) => (
              <SwiperSlide key={member.id} className="!h-auto">
                <div className="relative px-2 py-4">
                  <FacultyCard member={member} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default FacultyShowcase;
