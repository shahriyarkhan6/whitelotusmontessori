"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";


const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxa9FLxCyq0QT65RKjfT4pZtJQPucw_HNQ78eieIKZGvCb5v7lG6_omIrNga3VEMs2/exec";

const inputClass = "w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent";
const labelClass = "block text-sm font-medium text-warm-gray-700 mb-1.5";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const empty: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    fetch(SCRIPT_URL + "?" + new URLSearchParams({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    }), { mode: "no-cors" }).catch(() => {});
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <>
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
        <SectionWrapper className="py-10 md:py-14">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-sage-700" />
            </div>
            <h2 className="font-heading text-sage-900 text-2xl font-bold mb-3">Message Sent!</h2>
            <p className="text-warm-gray-600">Thank you for reaching out. We&apos;ll get back to you within one business day.</p>
          </div>
        </SectionWrapper>
      </>
    );
  }

  return (
    <>
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

      <SectionWrapper className="py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-heading text-sage-900 text-2xl font-bold mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">Address</h3>
                  <address className="not-italic text-warm-gray-600 text-sm leading-relaxed">
                    300 Dundas St W<br />
                    Whitby, ON L1N 2M5<br />
                    Canada
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">Phone</h3>
                  <a
                    href="tel:+16472611323"
                    className="text-warm-gray-600 hover:text-sage-700 text-sm transition-colors"
                  >
                    (647) 261-1323
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                  <a
                    href="mailto:info@whitelotusmontessori.com"
                    className="text-warm-gray-600 hover:text-sage-700 text-sm transition-colors"
                  >
                    info@whitelotusmontessori.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">Office Hours</h3>
                  <p className="text-warm-gray-600 text-sm">
                    Monday – Friday: 7:00 AM – 6:00 PM
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
            <form className="space-y-5" aria-label="Contact form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="first-name" className={labelClass}>First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className={inputClass}
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={set("firstName")}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className={labelClass}>Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    className={inputClass}
                    placeholder="Smith"
                    value={form.lastName}
                    onChange={set("lastName")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={inputClass}
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-warm-gray-400">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="647-261-1323"
                  value={form.phone}
                  onChange={set("phone")}
                />
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>Subject</label>
                <select
                  id="subject"
                  required
                  className="w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                  value={form.subject}
                  onChange={set("subject")}
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
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent resize-none"
                  placeholder="Tell us a little about your child and what you're looking for…"
                  value={form.message}
                  onChange={set("message")}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-terra-500 hover:bg-terra-600 text-white font-semibold py-3 rounded-full transition-colors text-base disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
