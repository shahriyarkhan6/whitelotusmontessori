import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | White Lotus Montessori",
  description:
    "Learn about the White Lotus Montessori philosophy, our dedicated team, and our commitment to raising confident, compassionate children in Whitby, Ontario.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-heading text-cream-50 text-4xl sm:text-5xl font-bold mb-4">
            The Montessori Philosophy at White Lotus Montessori
          </h1>
          <p className="text-sage-200 text-xl max-w-2xl">
            A community built on trust, respect, and a deep belief in every child&apos;s potential.
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-sage-800 text-2xl sm:text-3xl font-semibold leading-snug mb-5">
              &ldquo;The education of every child does not aim at preparing the child for school, but for life.&rdquo;
            </p>
            <cite className="not-italic text-warm-gray-500 text-sm uppercase tracking-widest font-medium">
              — Maria Montessori
            </cite>
          </blockquote>
        </div>
      </div>

      {/* Full philosophy */}
      <SectionWrapper className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto space-y-5 text-warm-gray-600 text-base leading-relaxed">
          <p>
            At White Lotus Montessori, we believe childhood is the foundation of lifelong learning, confidence, and character. Rooted in the educational philosophy of Dr. Maria Montessori, our approach empowers children to become independent thinkers, compassionate leaders, and curious learners in an ever-evolving world.
          </p>
          <p>
            Our classrooms are intentionally designed as dynamic and nurturing environments where children are inspired to explore, discover, question, and create. Through hands-on learning experiences and thoughtfully prepared materials, children develop concentration, resilience, self-discipline, and a strong sense of purpose in their learning journey.
          </p>
          <p>
            At White Lotus Montessori, education extends beyond academics. We cultivate critical thinking, creativity, collaboration, communication, and problem-solving skills that prepare children for meaningful success in school and in life. Children are encouraged to think independently, make meaningful connections, communicate confidently, and approach challenges with curiosity and determination.
          </p>
          <p>
            Our multi-aged classrooms foster a strong sense of community, leadership, empathy, and mutual respect. Younger children are inspired by peer role models, while older students strengthen their confidence and leadership abilities through mentorship and collaboration. This environment naturally supports social-emotional growth alongside academic excellence.
          </p>
          <p>
            We recognize that every child learns differently and possesses unique strengths, interests, and potential. Our educators thoughtfully observe, guide, and support each child&apos;s individual developmental journey, creating personalized learning experiences that nurture confidence, independence, and capability.
          </p>
          <p>
            At White Lotus Montessori, we value authentic partnerships with families and believe open communication between home and school is essential to a child&apos;s success. Together, we create a supportive and inspiring environment where children feel safe, respected, empowered, and motivated to thrive.
          </p>
          <p>
            Our vision is to cultivate lifelong learners who are innovative, self-motivated, socially conscious, and prepared to contribute meaningfully to the world around them. Through a balanced foundation of academic excellence, independence, emotional intelligence, and critical thinking, children develop the skills and mindset needed to flourish in the 21st century and beyond.
          </p>
          <div className="pt-4">
            <Link
              href="/admissions"
              className="inline-block bg-sage-600 hover:bg-sage-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
