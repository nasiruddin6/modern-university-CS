import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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
            Get in Touch
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Have questions about admissions, programs, or campus life? We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: MapPin, label: 'Address', value: '123 University Avenue, Dhaka 1200, Bangladesh' },
              { icon: Phone, label: 'Phone', value: '+880 1234-567890' },
              { icon: Mail, label: 'Email', value: 'info@modernuniversity.edu' },
              { icon: Clock, label: 'Office Hours', value: 'Sun – Thu: 9:00 AM – 5:00 PM' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="rounded-xl bg-emerald-50 p-3">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{label}</p>
                  <p className="mt-1 text-sm text-gray-500">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-xl font-bold text-gray-900">Send a Message</h2>
            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
