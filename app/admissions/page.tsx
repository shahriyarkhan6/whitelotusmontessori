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
    title: "Book a Tour",
    description:
      "Start with a visit. You and your child are welcome to come and experience our environment firsthand. Our director will walk you through the classrooms, answer your questions, and discuss how the program might fit your family.",
  },
  {
    number: "02",
    title: "Submit an Application",
    description:
      "Complete our enrolment application form and submit it along with your child's immunization records and birth certificate. Applications are reviewed on a rolling basis, with priority given to siblings of current students.",
  },
  {
    number: "03",
    title: "Child Observation Visit",
    description:
      "Prospective students are invited for a short observation visit so our educators can learn about your child's interests and temperament. This helps us plan a smooth, welcoming first week.",
  },
  {
    number: "04",
    title: "Confirm Enrollment",
    description:
      "Upon acceptance, you will receive an offer letter and registration package. A registration deposit secures your child's spot. We will work with you to arrange a gradual start schedule tailored to your child.",
  },
];

const faqs = [
  {
    q: "What are your hours of operation?",
    a: "The Casa program runs Monday to Friday, 8:30 AM to 3:00 PM. Extended care is available from 7:30 AM and until 5:30 PM. The Toddler program runs 8:30 AM to 12:00 PM.",
  },
  {
    q: "Is a subsidy available?",
    a: "Yes. White Lotus Montessori is registered with the Region of Durham's Child Care Fee Subsidy program. Eligible families can apply through the Region of Durham directly.",
  },
  {
    q: "What is the child-to-educator ratio?",
    a: "In the Toddler room, we maintain a 1:4 ratio. In the Casa program, our ratio is 1:8, well below the provincial requirement, ensuring each child receives individualized attention.",
  },
  {
    q: "Do you follow the Ontario curriculum?",
    a: "Yes. Our Casa program is aligned with the Ontario Ministry of Education Kindergarten Program while remaining faithful to Montessori principles. Children who complete our program are exceptionally well prepared for Grade 1.",
  },
  {
    q: "What should my child bring each day?",
    a: "Children should arrive in comfortable, easy-to-manage clothing suitable for messy, active play. Please provide a labelled lunch bag (with a nut-free lunch for Extended Day families), a change of clothes, and indoor shoes.",
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
            We are so glad you&apos;re considering White Lotus for your child. Enrolment is straightforward — here&apos;s how to get started.
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
            Four simple steps to joining the White Lotus community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="font-heading text-terra-300 text-5xl font-bold leading-none flex-shrink-0 w-12">
                {step.number}
              </div>
              <div>
                <h3 className="font-heading text-sage-800 text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-warm-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-terra-500 hover:bg-terra-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base"
          >
            Book Your Tour
          </Link>
        </div>
      </SectionWrapper>

      {/* Tuition note */}
      <div className="bg-cream-100">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-sage-900 text-3xl font-bold mb-6 text-center">
              Tuition & Fees
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-warm-gray-100 space-y-4 text-warm-gray-600 text-sm leading-relaxed">
              <p>
                Our fees reflect the quality of our program, the qualifications of our educators, and our commitment to maintaining excellent staff-to-child ratios. We believe in transparent, fair pricing.
              </p>
              <p>
                Tuition is billed monthly and is due on the first of each month. A registration deposit (equal to one month&apos;s tuition) is required upon acceptance and is applied to the final month of enrolment.
              </p>
              <p>
                <strong className="text-warm-gray-800">Fee schedules are provided directly during the admissions process.</strong> Please contact us or book a tour to receive current fee information for the program(s) you are interested in.
              </p>
              <p>
                We are registered with the <strong className="text-warm-gray-800">Region of Durham Child Care Subsidy</strong> program and we encourage eligible families to apply. Our administrative team is happy to assist you through the process.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* FAQ */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-sage-900 text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-warm-gray-200 pb-8 last:border-0 last:pb-0">
                <h3 className="font-heading text-sage-800 text-lg font-semibold mb-3">{faq.q}</h3>
                <p className="text-warm-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
