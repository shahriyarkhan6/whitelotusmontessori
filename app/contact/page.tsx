import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Contact | White Lotus Montessori",
  description:
    "Get in touch with White Lotus Montessori in Whitby, Ontario. We would love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-heading text-cream-50 text-4xl sm:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-sage-200 text-xl max-w-2xl">
            We&apos;d love to hear from you — whether you have a question, want to book a tour, or just want to learn more.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-heading text-sage-900 text-2xl font-bold mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">Address</h3>
                  <address className="not-italic text-warm-gray-600 text-sm leading-relaxed">
                    White Lotus Montessori<br />
                    Whitby, Ontario<br />
                    Canada
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">Phone</h3>
                  <a
                    href="tel:+19055550123"
                    className="text-warm-gray-600 hover:text-sage-700 text-sm transition-colors"
                  >
                    (905) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                  <a
                    href="mailto:hello@whitelotusmontessori.ca"
                    className="text-warm-gray-600 hover:text-sage-700 text-sm transition-colors"
                  >
                    hello@whitelotusmontessori.ca
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">Office Hours</h3>
                  <p className="text-warm-gray-600 text-sm">
                    Monday – Friday: 8:00 AM – 5:30 PM<br />
                    We typically respond to emails within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="font-heading text-sage-900 text-2xl font-bold mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-5" aria-label="Contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-warm-gray-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-warm-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-warm-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-warm-gray-700 mb-1.5">
                  Phone Number <span className="text-warm-gray-400">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                  placeholder="(905) 555-0000"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-700 mb-1.5">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                >
                  <option value="">Select a subject…</option>
                  <option>Book a Tour</option>
                  <option>Program Information</option>
                  <option>Admissions Question</option>
                  <option>Fee Subsidy</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-warm-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent resize-none"
                  placeholder="Tell us a little about your child and what you're looking for…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-terra-500 hover:bg-terra-600 text-white font-semibold py-3 rounded-full transition-colors text-base"
              >
                Send Message
              </button>
              <p className="text-warm-gray-500 text-xs text-center">
                We typically respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
