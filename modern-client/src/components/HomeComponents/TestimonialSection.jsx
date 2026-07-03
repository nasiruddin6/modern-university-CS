import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    quote:
      'Modern University gave me the skills and confidence to land my dream job in tech. The CSE faculty truly goes above and beyond.',
    name: 'Rafiul Islam',
    department: 'Computer Science & Engineering',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format&q=75',
  },
  {
    id: 2,
    quote:
      'The hands-on labs and industry partnerships in EEE prepared me for real-world engineering challenges from day one.',
    name: 'Sadia Akter',
    department: 'Electrical & Electronic Engineering',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face&auto=format&q=75',
  },
  {
    id: 3,
    quote:
      'BBA at Modern University opened doors to internships and networking I never imagined. A transformative experience.',
    name: 'Tanvir Hossain',
    department: 'Business Administration',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face&auto=format&q=75',
  },
  {
    id: 4,
    quote:
      'The law program combines rigorous academics with practical moot court experience. I felt fully prepared for my career.',
    name: 'Priya Sharma',
    department: 'Law',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face&auto=format&q=75',
  },
  {
    id: 5,
    quote:
      'Studying English here sharpened my critical thinking and communication. The campus community is incredibly supportive.',
    name: 'Michael Torres',
    department: 'English',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&auto=format&q=75',
  },
  {
    id: 6,
    quote:
      'Architecture studios and design critiques pushed my creativity. I built a portfolio that impressed every employer I met.',
    name: 'Ayesha Khan',
    department: 'Architecture',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face&auto=format&q=75',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={16}
        className={
          star <= rating
            ? 'fill-amber-400 text-amber-400'
            : 'fill-gray-200 text-gray-200'
        }
      />
    ))}
  </div>
);

const TestimonialCard = ({ item }) => (
  <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
    <Quote className="mb-4 h-10 w-10 text-emerald-200" aria-hidden="true" />

    <p className="flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
      &ldquo;{item.quote}&rdquo;
    </p>

    <div className="mt-5">
      <StarRating rating={item.rating} />
    </div>

    <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
      <img
        src={item.avatar}
        alt={item.name}
        className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-emerald-100"
        loading="lazy"
        decoding="async"
        width={56}
        height={56}
      />
      <div>
        <h3 className="font-bold text-gray-900">{item.name}</h3>
        <p className="text-sm text-emerald-600">{item.department}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const [sectionRef, inView] = useInView();

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Hear from students across departments about their experience at
            Modern University.
          </p>
        </div>

        <div data-aos="fade-in" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={
              inView
                ? {
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            pagination={{ clickable: true }}
            loop
            speed={400}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="testimonial-swiper !pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
