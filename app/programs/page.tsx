import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs | White Lotus Montessori",
  description:
    "Explore our Toddler, Casa, and Extended Day programs for children aged 18 months to 6 years in Whitby, Ontario.",
};

const programs = [
  {
    id: "toddler",
    icon: "🌱",
    title: "Toddler Program",
    age: "18 months – 2.5 years",
    hours: "Monday – Friday, 8:30 AM – 12:00 PM",
    description:
      "The Toddler program is a carefully prepared bridge between home and school. In a small, intimate classroom, toddlers develop a sense of order and belonging while building the foundational skills they need for lifelong independence.",
    highlights: [
      "Low 1:4 educator-to-child ratio",
      "Language-rich morning circle and storytelling",
      "Practical life activities: pouring, sorting, folding",
      "Daily outdoor exploration",
      "Gentle toilet-learning support",
      "Seamless transition planning into Casa",
    ],
  },
  {
    id: "casa",
    icon: "🏡",
    title: "Casa Program",
    age: "2.5 – 6 years",
    hours: "Monday – Friday, 8:30 AM – 3:00 PM",
    description:
      "Casa — meaning 'home' in Italian — is the heart of the Montessori approach. In a multi-age classroom spanning from preschool to Kindergarten, children work with beautiful, purposeful materials that build concentration, problem-solving, and a genuine love of learning.",
    highlights: [
      "Five curriculum areas: Practical Life, Sensorial, Language, Mathematics, Cultural Studies",
      "Self-paced individual and small-group work cycles",
      "Mixed-age 3–6 classroom (peer mentorship)",
      "Phonics-based reading and early writing",
      "Concrete math materials leading to abstract reasoning",
      "Ministry of Education Kindergarten curriculum alignment",
    ],
  },
  {
    id: "extended",
    icon: "🌅",
    title: "Extended Day Program",
    age: "2.5 – 6 years",
    hours: "Before care from 7:30 AM | After care until 5:30 PM",
    description:
      "Life is busy, and we&apos;re here to support your whole family. The Extended Day program wraps around our Casa program to offer flexible before- and after-school care in a calm, enriching environment. Children enjoy free choice, art, outdoor play, and quiet rest.",
    highlights: [
      "Before care from 7:30 AM",
      "After care until 5:30 PM",
      "Hot lunch and snack preparation (families provide lunch)",
      "Afternoon rest/quiet time for younger children",
      "Arts, crafts, and sensory enrichment activities",
      "Consistent, familiar educators throughout the day",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-heading text-cream-50 text-4xl sm:text-5xl font-bold mb-4">
            Our Programs
          </h1>
          <p className="text-sage-200 text-xl max-w-2xl">
            Thoughtfully designed programs for every stage of early childhood, from your toddler&apos;s first classroom to kindergarten graduation.
          </p>
        </div>
      </div>

      {/* Program details */}
      <SectionWrapper>
        <div className="space-y-20">
          {programs.map((program, index) => (
            <div
              key={program.id}
              id={program.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-5xl mb-4">{program.icon}</div>
                <h2 className="font-heading text-sage-900 text-3xl font-bold mb-2">
                  {program.title}
                </h2>
                <p className="text-terra-600 font-semibold mb-1">{program.age}</p>
                <p className="text-warm-gray-500 text-sm mb-6">{program.hours}</p>
                <p className="text-warm-gray-600 text-base leading-relaxed mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-warm-gray-700 text-sm">
                      <span className="mt-0.5 w-5 h-5 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder */}
              <div
                className={`rounded-2xl flex items-center justify-center aspect-video text-8xl ${
                  index === 0
                    ? "bg-sage-100"
                    : index === 1
                    ? "bg-terra-50"
                    : "bg-cream-200"
                } ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {program.icon}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <div className="bg-cream-100">
        <SectionWrapper>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-sage-900 text-3xl font-bold mb-4">
              Not sure which program is right for your child?
            </h2>
            <p className="text-warm-gray-600 text-lg mb-8">
              Our educators are happy to talk through your child&apos;s needs and help you find the best fit. A tour is always the best place to start.
            </p>
            <Link
              href="/admissions"
              className="inline-block bg-terra-500 hover:bg-terra-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Book a Tour
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
