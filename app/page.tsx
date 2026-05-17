import Link from "next/link";
import Image from "next/image";
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
      {/* ── Hero — Full Screen ── */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Image — right 75% on mobile, right 70% on desktop */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-[70%]">
          <Image
            src="/wlm_boy.jpg"
            alt="White Lotus Montessori"
            fill
            priority
            className="object-cover object-left-top blur-sm scale-105"
          />
        </div>
        {/* Fade overlay — left-to-right on desktop only */}
        <div
          className="absolute inset-0 z-10 hidden lg:block"
          style={{
            background: "linear-gradient(to right, #f5f2ec 35%, transparent 50%)",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14 pb-20">
          <div className="max-w-2xl">
            <h1 className="font-heading text-[#2d5a27] lg:text-sage-green font-bold leading-[1.15] mb-6 text-center lg:text-left">
              <span className="block text-[1.35rem] sm:text-2xl font-semibold mb-1">Welcome to</span>
              <span className="block text-[2.7rem] sm:text-[3.6rem] xl:text-[4.2rem]">White Lotus Montessori</span>
            </h1>

            {/* Lotus divider in hint-yellow */}
            <div className="mb-6">
              <LotusDivider />
            </div>

            <p className="font-sans text-[#2d5a27] text-lg leading-relaxed max-w-[480px]">
              We empower children through Montessori learning to become confident thinkers, lifelong learners, and compassionate contributors to the world.
            </p>
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
