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

/* ── Data ──────────────────────────────────────────────── */

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
      {/* ── Hero ── */}
      {/* Mobile: stacked (image top, text below). Desktop: side overlay. */}
      <section className="overflow-hidden lg:relative lg:min-h-[70vh]">
        {/* Image */}
        <div className="relative h-[90vw] w-full lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[70%]">
          <Image
            src="/wlm_boy.jpg"
            alt="White Lotus Montessori"
            fill
            priority
            className="object-cover object-[center_15%] lg:object-left-top"
          />
        </div>

        {/* Desktop fade overlay — left-to-right */}
        <div
          className="absolute inset-0 z-10 hidden lg:block"
          style={{ background: "linear-gradient(to right, #f5f2ec 35%, transparent 50%)" }}
        />

        {/* Text */}
        <div className="bg-[#f5f2ec] lg:bg-transparent relative z-20 lg:absolute lg:inset-0">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 lg:pt-14 lg:pb-20">
            <div className="max-w-2xl lg:mx-0">
              <h1 className="font-heading text-[#2d5a27] font-bold leading-[1.15] mb-6 text-left">
                <span className="block text-[1.35rem] sm:text-2xl font-semibold mb-1">Welcome to</span>
                <span className="block text-[2.7rem] sm:text-[3.6rem] xl:text-[4.2rem]">White Lotus Montessori</span>
              </h1>
              <div className="mb-6">
                <LotusDivider />
              </div>
              <p className="font-sans text-[#2d5a27] text-lg leading-relaxed max-w-[480px]">
                We empower children through Montessori learning to become confident thinkers, lifelong learners, and compassionate contributors to the world.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* ── Why Montessori ── */}
      <SectionWrapper id="why-montessori" className="-mt-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-sage-green text-3xl sm:text-4xl font-bold mb-4">
              Our Philosophy
            </h2>
            <p className="font-sans text-olive-green text-lg leading-relaxed">
              At White Lotus Montessori, we empower and guide confident, independent, and emotionally intelligent children through personalized Montessori learning experiences designed to inspire curiosity, creativity, and critical thinking. Our child-centered approach encourages children to explore, problem-solve, communicate with confidence, and develop strong social-emotional skills in a calm, supportive environment. We are committed to helping every child grow into a compassionate, capable, and lifelong learner ready to succeed academically, socially, and personally.
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
            Take the Next Step
          </h2>
          <p className="font-sans text-soft-white/80 text-lg max-w-xl mx-auto mb-8">
            Spaces are limited. Contact our team today to begin your child&apos;s journey with White Lotus Montessori, we look forward to welcoming your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
