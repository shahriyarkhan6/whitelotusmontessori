"use client";

import { useState } from "react";
import Link from "next/link";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzNXK9XWXtiUFhkLUezDw7-0Wko4g7rZcsdSGsxAU9sfhYwd1B_R-Y7OZKZlV5qvUM6/exec";

const inputClass =
  "w-full rounded-lg border border-warm-gray-300 bg-white px-4 py-2.5 text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent";

const labelClass = "block text-sm font-medium text-warm-gray-700 mb-1.5";

type FormData = {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childDob: string;
  program: string;
  startDate: string;
  referral: string;
  notes: string;
};

const empty: FormData = {
  parentName: "",
  email: "",
  phone: "",
  childName: "",
  childDob: "",
  program: "",
  startDate: "",
  referral: "",
  notes: "",
};

export default function WaitlistPage() {
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdownError, setDropdownError] = useState<string | null>(null);

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (field === "program" || field === "referral") setDropdownError(null);
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.program) {
      setDropdownError("Please select a program.");
      return;
    }
    if (!form.referral) {
      setDropdownError("Please select how you heard about us.");
      return;
    }
    setDropdownError(null);
    setLoading(true);
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams({
        parentName: form.parentName,
        email: form.email,
        phone: form.phone,
        childName: form.childName,
        childDob: form.childDob,
        program: form.program,
        startDate: form.startDate,
        referral: form.referral,
        notes: form.notes,
      }),
    }).catch(() => {});
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <>
      {/* Page header */}
      <div className="bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-heading text-cream-50 text-4xl sm:text-5xl font-bold mb-4">
            Join Our Waiting List
          </h1>
          <p className="text-sage-200 text-xl max-w-2xl">
            Spaces at White Lotus Montessori fill quickly. Add your family to our waiting list and we&apos;ll be in touch as soon as a spot becomes available.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left — context */}
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-sage-green text-2xl font-bold mb-4">
                What happens next?
              </h2>
              <ol className="space-y-5">
                {[
                  { n: "01", title: "We receive your form", body: "Your information is added to our waiting list right away." },
                  { n: "02", title: "We reach out", body: "When a spot opens that matches your child's age and program, our team contacts you directly." },
                  { n: "03", title: "Schedule a visit", body: "Come meet us, see the classroom, and ask all your questions before committing." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="font-heading text-sage-400 text-2xl font-bold leading-none w-8 flex-shrink-0">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-sans font-semibold text-sage-green text-sm mb-0.5">{step.title}</p>
                      <p className="font-sans text-olive-green/80 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-hint-yellow/40 rounded-2xl p-6 border border-hint-yellow">
              <p className="font-sans text-sage-green text-sm leading-relaxed">
                <span className="font-semibold block mb-1">Have a question first?</span>
                Feel free to{" "}
                <Link href="/contact" className="underline underline-offset-2 hover:text-olive-green transition-colors">
                  contact us
                </Link>{" "}
                before submitting — we&apos;re always happy to chat.
              </p>
            </div>
          </aside>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-soft-white rounded-2xl border border-powder-pink h-full">
                <div className="w-16 h-16 rounded-full bg-hint-yellow/60 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-green">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="font-heading text-sage-green text-3xl font-bold mb-3">
                  You&apos;re on the list!
                </h2>
                <p className="font-sans text-olive-green/80 text-base leading-relaxed max-w-sm mb-8">
                  Thank you for reaching out. We&apos;ve received your information and will be in touch when a spot becomes available for your little one.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-sage-green hover:bg-sage-700 text-white font-sans text-sm uppercase tracking-widest px-8 py-3 rounded-full transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Waiting list form">

                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className={labelClass}>
                    Parent / Guardian Name
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Jane Smith"
                    value={form.parentName}
                    onChange={set("parentName")}
                    className={inputClass}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={set("email")}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="647-261-1323"
                      value={form.phone}
                      onChange={set("phone")}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Child Name + DOB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="childName" className={labelClass}>
                      Child&apos;s Name
                    </label>
                    <input
                      id="childName"
                      type="text"
                      required
                      placeholder="First name is fine"
                      value={form.childName}
                      onChange={set("childName")}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="childDob" className={labelClass}>
                      Child&apos;s Date of Birth
                    </label>
                    <input
                      id="childDob"
                      type="date"
                      required
                      value={form.childDob}
                      onChange={set("childDob")}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Program Interest */}
                <div>
                  <label htmlFor="program" className={labelClass}>
                    Program Interest
                  </label>
                  <select
                    id="program"
                    value={form.program}
                    onChange={set("program")}
                    className={inputClass}
                  >
                    <option value="">Select a program…</option>
                    <option value="Toddler 18mo-3yr">Toddler — 18 months to 3 years</option>
                    <option value="Preschool 3-6yr">Preschool — 3 to 6 years</option>
                  </select>
                </div>

                {/* Desired Start Date */}
                <div>
                  <label htmlFor="startDate" className={labelClass}>
                    Desired Start Date
                  </label>
                  <input
                    id="startDate"
                    type="month"
                    required
                    value={form.startDate}
                    onChange={set("startDate")}
                    className={inputClass}
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label htmlFor="referral" className={labelClass}>
                    How did you hear about us?
                  </label>
                  <select
                    id="referral"
                    value={form.referral}
                    onChange={set("referral")}
                    className={inputClass}
                  >
                    <option value="">Select one…</option>
                    <option value="Google">Google</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Word of mouth">Word of mouth</option>
                    <option value="Drive-by">Drive-by</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Dropdown validation error */}
                {dropdownError && (
                  <p className="text-terra-600 text-sm font-medium">{dropdownError}</p>
                )}

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className={labelClass}>
                    Additional Notes{" "}
                    <span className="text-warm-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    placeholder="Anything else you'd like us to know about your child or family…"
                    value={form.notes}
                    onChange={set("notes")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-sage-green hover:bg-sage-700 disabled:opacity-60 text-white font-sans font-semibold text-sm uppercase tracking-widest py-3.5 rounded-full transition-colors"
                >
                  {loading ? "Submitting…" : "Join the Waiting List"}
                </button>

                <p className="text-warm-gray-400 text-xs text-center">
                  Your information is kept private and used only for admissions purposes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
