import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

const programs = [
  {
    title: "Toddler Program",
    age: "18 months – 2.5 years",
    description:
      "A gentle introduction to the Montessori environment. Toddlers build independence, language, and fine motor skills through hands-on materials and caring one-on-one guidance.",
    icon: "🌱",
    href: "/programs#toddler",
  },
  {
    title: "Casa Program",
    age: "2.5 – 6 years",
    description:
      "Our flagship multi-age classroom follows the Montessori philosophy of self-directed learning. Children develop reading, math, practical life, and social-emotional skills at their own pace.",
    icon: "🏡",
    href: "/programs#casa",
  },
  {
    title: "Extended Day",
    age: "2.5 – 6 years",
    description:
      "Flexible extended-care hours for busy families — before and after the core program. Children enjoy enrichment activities, outdoor play, and rest in a nurturing, consistent environment.",
    icon: "🌅",
    href: "/programs#extended",
  },
];

const whyPoints = [
  {
    icon: "🌿",
    title: "Child-Led Discovery",
    description:
      "We follow the child's natural curiosity. Our educators observe, guide, and prepare the environment so every child can learn in the way that suits them best.",
  },
  {
    icon: "🎓",
    title: "Certified Educators",
    description:
      "Every teacher holds an accredited Montessori credential and brings warmth, patience, and deep respect for early childhood development.",
  },
  {
    icon: "🤝",
    title: "Partnership with Families",
    description:
      "We believe parents are a child's first teacher. Regular communication, transparent progress updates, and family events keep you closely connected to your child's journey.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Programs Overview */}
      <div className="bg-cream-100">
        <SectionWrapper id="programs">
          <div className="text-center mb-12">
            <h2 className="font-heading text-sage-900 text-3xl sm:text-4xl font-bold mb-4">
              Programs for Every Stage
            </h2>
            <p className="text-warm-gray-600 text-lg max-w-2xl mx-auto">
              From first steps to kindergarten, our programs meet children exactly where they are and grow with them every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="font-heading text-sage-800 text-xl font-semibold mb-1">
                  {program.title}
                </h3>
                <p className="text-terra-600 text-sm font-medium mb-4">{program.age}</p>
                <p className="text-warm-gray-600 text-sm leading-relaxed flex-1">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="inline-block mt-6 text-sage-600 hover:text-sage-800 text-sm font-semibold transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Why Montessori */}
      <SectionWrapper id="why-montessori">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-sage-900 text-3xl sm:text-4xl font-bold mb-4">
              Why Montessori?
            </h2>
            <p className="text-warm-gray-600 text-lg leading-relaxed mb-6">
              The Montessori method, developed by Dr. Maria Montessori over a century ago, recognizes that children are naturally motivated to learn. When given freedom within a structured, beautiful environment, they flourish — academically, socially, and emotionally.
            </p>
            <p className="text-warm-gray-600 text-base leading-relaxed">
              At White Lotus, we honour each child&apos;s individuality and pace, fostering a lifelong love of learning that goes far beyond the classroom.
            </p>
          </div>
          <div className="space-y-6">
            {whyPoints.map((point) => (
              <div key={point.title} className="flex gap-5">
                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-heading text-sage-800 text-lg font-semibold mb-1">
                    {point.title}
                  </h4>
                  <p className="text-warm-gray-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <div className="bg-terra-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-heading text-white text-3xl sm:text-4xl font-bold mb-4">
            Ready to Enroll?
          </h2>
          <p className="text-terra-100 text-lg max-w-xl mx-auto mb-8">
            Spaces are limited. Take the first step by booking a personal tour or reaching out to our team — we&apos;d love to meet your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-block bg-white text-terra-600 hover:bg-cream-100 font-semibold px-8 py-3.5 rounded-full transition-colors text-base shadow"
            >
              Start Enrollment
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-terra-600 hover:bg-terra-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base border border-terra-400"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
