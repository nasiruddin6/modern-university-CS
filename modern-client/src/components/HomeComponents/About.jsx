import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const UNIVERSITY_VIDEO_ID = 'HsZRh73YUyw';

const About = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setLoaded(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <section className="bg-slate-900 py-14 sm:py-16">
            <div className="mx-auto w-11/12 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    {/* Video */}
                    <div
                        className={`transform transition-all duration-500 ${
                            loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                    >
                        <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
                            <iframe
                                className="aspect-video w-full"
                                src={`https://www.youtube.com/embed/${UNIVERSITY_VIDEO_ID}?rel=0&modestbranding=1`}
                                title="Modern University Campus Tour"
                                frameBorder="0"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div
                        className={`text-center md:text-left transform transition-all duration-500 delay-75 ${
                            loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                    >
                        <h2 className="pb-6 text-3xl font-bold md:pb-10 md:text-4xl">
                            About <span className="text-emerald-400">Our University</span>
                        </h2>
                        <p className="pb-6 text-sm leading-relaxed text-gray-300 md:pb-8 md:text-base">
                            As one of the world&apos;s premier academic and research institutions,
                            Modern University has driven new ways of thinking since our founding.
                            Today, we represent an intellectual destination that draws inspired
                            scholars to our local and international campuses, keeping us at the
                            nexus of ideas that challenge and change the world and provide
                            companies with new specialists.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button
                                type="button"
                                className={`btn flex items-center gap-2 border border-gray-600 bg-transparent text-white transition-all duration-500 delay-150 hover:border-emerald-500 hover:bg-emerald-600 ${
                                    loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                }`}
                            >
                                Learn More <FaArrowRightLong />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
