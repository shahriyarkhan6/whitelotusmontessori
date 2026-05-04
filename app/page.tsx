import Link from "next/link";
import { Leaf, Home as HouseIcon, User } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

/* ── Inline SVG helpers ─────────────────────────────────── */

function LotusDivider() {
  return (
    <svg
      width="52"
      height="20"
      viewBox="0 0 52 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-hint-yellow"
      aria-hidden="true"
    >
      {/* Center petal */}
      <path
        d="M26 16 C25.4 12.5 24 9 24 6.5 C24 4.5 24.8 3.5 26 3.5 C27.2 3.5 28 4.5 28 6.5 C28 9 26.6 12.5 26 16 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Left petal */}
      <path
        d="M26 16 C23 11.5 18.5 9 17 6.5 C15.5 4 17 2 19.5 2.5 C21.5 3 23.5 8 26 16 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Right petal */}
      <path
        d="M26 16 C29 11.5 33.5 9 35 6.5 C36.5 4 35 2 32.5 2.5 C30.5 3 28.5 8 26 16 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Water line */}
      <path
        d="M16 18.5 Q26 15 36 18.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LotusFeatureIcon() {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-olive-green"
      aria-hidden="true"
    >
      <path
        d="M12 18 C11.5 14 10.5 10 10.5 7.5 C10.5 5.5 11.2 4.5 12 4.5 C12.8 4.5 13.5 5.5 13.5 7.5 C13.5 10 12.5 14 12 18 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M12 18 C9.5 13.5 6.5 10.5 5.5 8 C4.5 5.5 6 3.5 8.5 4 C10 4.5 11 9.5 12 18 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M12 18 C14.5 13.5 17.5 10.5 18.5 8 C19.5 5.5 18 3.5 15.5 4 C14 4.5 13 9.5 12 18 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 20 Q12 17 18.5 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────── */

const features = [
  {
    icon: <Leaf size={24} strokeWidth={1} className="text-olive-green" />,
    label: "CHILD-CENTERED",
    body: "Learning at their own pace",
  },
  {
    icon: <HouseIcon size={24} strokeWidth={1} className="text-olive-green" />,
    label: "BEAUTIFUL ENVIRONMENT",
    body: "Calm, natural and inspiring",
  },
  {
    icon: <User size={24} strokeWidth={1} className="text-olive-green" />,
    label: "EXPERIENCED GUIDES",
    body: "Nurturing and trained educators",
  },
  {
    icon: <LotusFeatureIcon />,
    label: "HOLISTIC DEVELOPMENT",
    body: "Mind, body and spirit",
  },
];

const programs = [
  {
    title: "Toddler Program",
    age: "18 months – 2.5 years",
    description:
      "A gentle introduction to the Montessori environment. Toddlers build independence, language, and fine motor skills through hands-on materials and caring one-on-one guidance.",
    href: "/programs#toddler",
  },
  {
    title: "Casa Program",
    age: "2.5 – 6 years",
    description:
      "Our flagship multi-age classroom follows the Montessori philosophy of self-directed learning. Children develop reading, math, practical life, and social-emotional skills at their own pace.",
    href: "/programs#casa",
  },
  {
    title: "Extended Day",
    age: "2.5 – 6 years",
    description:
      "Flexible extended-care hours for busy families — before and after the core program. Children enjoy enrichment activities, outdoor play, and rest in a nurturing, consistent environment.",
    href: "/programs#extended",
  },
];

const whyPoints = [
  {
    icon: <Leaf size={22} strokeWidth={1} className="text-olive-green" />,
    title: "Child-Led Discovery",
    description:
      "We follow the child's natural curiosity. Our educators observe, guide, and prepare the environment so every child can learn in the way that suits them best.",
  },
  {
    icon: <User size={22} strokeWidth={1} className="text-olive-green" />,
    title: "Certified Educators",
    description:
      "Every teacher holds an accredited Montessori credential and brings warmth, patience, and deep respect for early childhood development.",
  },
  {
    icon: <HouseIcon size={22} strokeWidth={1} className="text-olive-green" />,
    title: "Partnership with Families",
    description:
      "We believe parents are a child's first teacher. Regular communication, transparent progress updates, and family events keep you closely connected to your child's journey.",
  },
];

/* ── Page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── Hero — Split Layout ── */}
      <section className="bg-soft-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-32">

            {/* Left — content */}
            <div className="max-w-xl">
              <h1 className="font-heading text-sage-green text-4xl sm:text-5xl xl:text-[3.5rem] font-bold leading-[1.15] mb-6">
                Nurturing Independence. Inspiring Potential.
              </h1>

              {/* Lotus divider in hint-yellow */}
              <div className="mb-6">
                <LotusDivider />
              </div>

              <p className="font-sans text-olive-green text-lg leading-relaxed mb-10">
                A peaceful Montessori environment where children grow with confidence,
                curiosity, and a love for learning.
              </p>

              <Link
                href="/admissions"
                className="inline-flex items-center bg-powder-pink hover:bg-[#dfc8c3] text-sage-green font-sans text-sm uppercase tracking-widest px-8 py-3.5 rounded-sm transition-colors"
              >
                BOOK A TOUR
              </Link>
            </div>

            {/* Right — image placeholder with stripe decoration */}
            <div className="relative py-8 pl-8 hidden sm:block">
              {/* Diagonal stripe decoration — extends behind image */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    30deg,
                    #EAD6D1,
                    #EAD6D1 2px,
                    transparent 2px,
                    transparent 26px,
                    #F2E8C9 26px,
                    #F2E8C9 28px,
                    transparent 28px,
                    transparent 52px
                  )`,
                  opacity: 0.15,
                }}
              />
              {/* Image placeholder */}
              <div className="relative w-full aspect-[4/5] rounded-lg bg-stone-100" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Feature Strip ── */}
      <div className="border-t border-powder-pink bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col gap-2.5 py-8 px-6 ${
                  i < features.length - 1
                    ? "border-r border-powder-pink/60"
                    : ""
                }`}
              >
                <div>{f.icon}</div>
                <p className="font-sans font-bold text-sage-green text-[0.65rem] uppercase tracking-widest leading-tight">
                  {f.label}
                </p>
                <p className="font-sans text-olive-green/70 text-xs leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Programs Overview ── */}
      <div className="bg-hint-yellow/20">
        <SectionWrapper id="programs">
          <div className="text-center mb-12">
            <h2 className="font-heading text-sage-green text-3xl sm:text-4xl font-bold mb-4">
              Programs for Every Stage
            </h2>
            <p className="font-sans text-olive-green text-lg max-w-2xl mx-auto">
              From first steps to kindergarten, our programs meet children exactly where they are and grow with them every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-soft-white rounded-2xl p-8 border border-powder-pink/40 hover:border-powder-pink transition-colors flex flex-col"
              >
                <h3 className="font-heading text-sage-green text-xl font-semibold mb-1">
                  {program.title}
                </h3>
                <p className="font-sans text-olive-green text-xs uppercase tracking-wider font-bold mb-4">
                  {program.age}
                </p>
                <p className="font-sans text-olive-green/80 text-sm leading-relaxed flex-1">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="inline-block mt-6 font-sans text-sage-green hover:text-olive-green text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* ── Why Montessori ── */}
      <SectionWrapper id="why-montessori">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-sage-green text-3xl sm:text-4xl font-bold mb-4">
              Why Montessori?
            </h2>
            <p className="font-sans text-olive-green text-lg leading-relaxed mb-6">
              The Montessori method, developed by Dr. Maria Montessori over a century ago, recognizes that children are naturally motivated to learn. When given freedom within a structured, beautiful environment, they flourish — academically, socially, and emotionally.
            </p>
            <p className="font-sans text-olive-green/80 text-base leading-relaxed">
              At White Lotus, we honour each child&apos;s individuality and pace, fostering a lifelong love of learning that goes far beyond the classroom.
            </p>
          </div>
          <div className="space-y-6">
            {whyPoints.map((point) => (
              <div key={point.title} className="flex gap-5">
                <div className="w-11 h-11 bg-hint-yellow/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-heading text-sage-green text-lg font-semibold mb-1">
                    {point.title}
                  </h4>
                  <p className="font-sans text-olive-green/80 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA Banner ── */}
      <div className="bg-olive-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-heading text-soft-white text-3xl sm:text-4xl font-bold mb-4">
            Ready to Enroll?
          </h2>
          <p className="font-sans text-soft-white/80 text-lg max-w-xl mx-auto mb-8">
            Spaces are limited. Take the first step by booking a personal tour or reaching out to our team — we&apos;d love to meet your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-block bg-soft-white text-sage-green hover:bg-hint-yellow font-sans text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-colors font-bold"
            >
              Start Enrollment
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border border-soft-white/60 hover:bg-white/10 text-soft-white font-sans text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
