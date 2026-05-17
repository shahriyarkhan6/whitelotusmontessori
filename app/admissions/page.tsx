import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions | White Lotus Montessori",
  description:
    "Learn how to enroll your child at White Lotus Montessori in Whitby, Ontario. Review our admissions process, fee information, and schedule a tour.",
};

const steps = [
  {
    number: "01",
    title: "Join Our Waitlist",
    description:
      "Fill out our inquiry form to share your child's details and preferred start date. We'll add your family to our waitlist right away.",
  },
  {
    number: "02",
    title: "Connect With Our Team",
    description:
      "Our admissions team will reach out to discuss availability, answer your questions, and walk you through the next steps.",
  },
  {
    number: "03",
    title: "Registration & Enrollment",
    description:
      "Families offered a spot will receive registration details and enrollment information to confirm their child's place.",
  },
];


export default function AdmissionsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-heading text-cream-50 text-4xl sm:text-5xl font-bold mb-4">
            Admissions
          </h1>
          <p className="text-sage-200 text-xl max-w-2xl">
            We look forward to supporting your child&apos;s growth by building on their strengths, interests, and learning style through admissions.
          </p>
        </div>
      </div>

      {/* Enrolment Steps */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="font-heading text-sage-900 text-3xl sm:text-4xl font-bold mb-4">
            The Enrolment Process
          </h2>
          <p className="text-warm-gray-600 text-lg max-w-xl mx-auto">
            Three simple steps to joining the White Lotus community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-warm-gray-100 rounded-2xl p-8 flex flex-col">
              <span className="font-heading text-terra-300 text-4xl font-bold leading-none mb-4">
                {step.number}
              </span>
              <div className="w-8 h-px bg-terra-200 mb-5" />
              <h3 className="font-heading text-sage-800 text-2xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-warm-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/waitlist"
            className="inline-block bg-terra-500 hover:bg-terra-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base"
          >
            Join the Waiting List
          </Link>
        </div>
      </SectionWrapper>

    </>
  );
}
