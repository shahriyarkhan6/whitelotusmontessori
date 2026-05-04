import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | White Lotus Montessori",
  description:
    "Learn about the White Lotus Montessori philosophy, our dedicated team, and our commitment to raising confident, compassionate children in Whitby, Ontario.",
};

const values = [
  {
    icon: "🌸",
    title: "Respect for the Child",
    body: "Every child is treated as a capable individual deserving of dignity, choice, and the space to develop at their own pace.",
  },
  {
    icon: "🌍",
    title: "Prepared Environment",
    body: "Our classrooms are thoughtfully designed with natural materials and real tools that invite exploration and independent work.",
  },
  {
    icon: "💚",
    title: "Whole-Child Wellness",
    body: "We nurture physical, emotional, social, and cognitive development together — because every dimension of a child matters.",
  },
  {
    icon: "🌱",
    title: "Love of Nature",
    body: "Outdoor time, seasonal activities, and care for living things are woven into our daily rhythm, grounding children in the natural world.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-heading text-cream-50 text-4xl sm:text-5xl font-bold mb-4">
            About White Lotus Montessori
          </h1>
          <p className="text-sage-200 text-xl max-w-2xl">
            A community built on trust, respect, and a deep belief in every child&apos;s potential.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-sage-900 text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-warm-gray-600 text-base leading-relaxed">
              <p>
                White Lotus Montessori was founded with a simple but powerful belief: that childhood is not a race. We wanted to create a space in Whitby where young children could slow down, engage deeply, and fall in love with learning on their own terms.
              </p>
              <p>
                Inspired by the lotus flower — which grows in still water and blooms from below the surface — our name reflects our philosophy. Authentic growth takes time, patience, and the right conditions. We are dedicated to providing exactly that.
              </p>
              <p>
                We are fully licensed by the Ministry of Education, Ontario, and operate in accordance with the <em>Child Care and Early Years Act</em>. Our classrooms meet rigorous standards for safety, curriculum, and staff-to-child ratios.
              </p>
            </div>
          </div>
          <div className="bg-sage-100 rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-8xl">🪷</span>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Values */}
      <div className="bg-cream-100">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="font-heading text-sage-900 text-3xl sm:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-warm-gray-600 text-lg max-w-xl mx-auto">
              Everything we do flows from a set of deeply held beliefs about children, families, and community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 border border-warm-gray-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-sage-800 text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-warm-gray-600 text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Meet the team teaser */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-sage-900 text-3xl font-bold mb-4">Our Educators</h2>
          <p className="text-warm-gray-600 text-lg leading-relaxed mb-8">
            Our team holds recognized Montessori credentials from accredited training centres and brings years of experience working with young children. We invest in ongoing professional development so that our practice continues to grow alongside our students.
          </p>
          <p className="text-warm-gray-600 text-base leading-relaxed mb-8">
            All staff are certified in First Aid and CPR, hold up-to-date Vulnerable Sector Checks, and have completed training in inclusion and equity practices. Our low child-to-educator ratios ensure that every child receives attentive, individualized care throughout the day.
          </p>
          <Link
            href="/admissions"
            className="inline-block bg-sage-600 hover:bg-sage-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Book a Tour to Meet Our Team
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
