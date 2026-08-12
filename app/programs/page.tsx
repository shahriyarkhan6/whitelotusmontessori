import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs | White Lotus Montessori",
  description:
    "Explore our Toddler, Casa, and Extended Day programs for children aged 18 months to 6 years in Whitby, Ontario.",
};

const programs = [
  {
    id: "toddler",
    icon: "🌱",
    image: "https://images.pexels.com/photos/8923952/pexels-photo-8923952.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Toddler Program",
    age: "18 months – 2.5 years",
    description:
      "Our Toddler Program supports the young child's developing independence, language, concentration, coordination, and sense of order. Through rich conversation, storytelling, and purposeful experiences, children expand their vocabulary, strengthen expressive language, and build early communication skills. Within a calm, carefully prepared environment, children are encouraged to explore with purpose, make meaningful choices, and develop the foundational capacities for confident, independent learning.",
    highlights: [
      "Language and vocabulary development through conversation, storytelling, and meaningful interactions",
      "Cognitive development building concentration, memory, sequencing, and problem-solving",
      "Practical Life work: pouring, sorting, folding, and caring for the environment",
      "Daily outdoor exploration supporting movement, sensory development, and nature connection",
      "Intentional preparation for Casa through independence, coordination, and classroom routines",
    ],
  },
  {
    id: "casa",
    icon: "🏡",
    image: "https://images.pexels.com/photos/8422262/pexels-photo-8422262.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Casa Program",
    age: "2.5 – 6 years",
    description:
      "Casa — meaning \"home\" in Italian — is the heart of the Montessori approach. In a thoughtfully prepared environment, children work with purposefully designed Montessori materials that build concentration, problem-solving, and a genuine love of learning. Casa provides a strong foundation for children as they progress toward the elementary years.",
    highlights: [
      "Individual and small-group learning experiences that encourage curiosity, exploration, and purposeful learning",
      "Phonics-based reading, early writing, and cursive writing",
      "Concrete math materials leading to abstract reasoning",
      "Hands-on exploration that develops investigation, critical thinking, and meaningful connections",
      "Science, geography, culture, and the natural world",
    ],
  },
  {
    id: "extended",
    icon: "🌅",
    image: "https://images.pexels.com/photos/8922799/pexels-photo-8922799.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Summer Camp",
    age: "18 months – 6 years",
    badge: "Only available July and August",
    description:
      "Our Summer Camp invites children to spend their summer exploring, creating, building, and discovering through engaging, hands-on experiences. Each week offers opportunities to investigate new ideas, express creativity, connect with nature, and develop confidence through meaningful experiences.",
    highlights: [
      "Hands-on exploration and discovery",
      "Creative arts, crafts, and making",
      "Outdoor play, nature, and movement",
      "Science, sensory, and inquiry-based activities",
      "Storytelling, music, and imaginative play",
      "Opportunities to build independence, collaboration, and confidence",
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
                {"badge" in program && program.badge && (
                  <span className="inline-block bg-hint-yellow text-sage-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {program.badge}
                  </span>
                )}
                <p className="text-terra-600 font-semibold mb-1">{program.age}</p>

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

              {/* Program image */}
              <div className={`relative rounded-2xl overflow-hidden aspect-video ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
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
