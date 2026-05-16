import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Handbook | White Lotus Montessori",
  description:
    "Read the White Lotus Montessori Parent Handbook — policies, procedures, program information, and important school guidelines for families.",
};

/* ── Reusable section heading ── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-sage-green text-2xl sm:text-3xl font-bold mt-12 mb-4 border-b border-powder-pink pb-3">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-sage-800 text-xl font-semibold mt-8 mb-3">
      {children}
    </h3>
  );
}

function SubSubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-heading text-sage-700 text-lg font-semibold mt-6 mb-2">
      {children}
    </h4>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-warm-gray-700 text-sm leading-relaxed mb-3">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-1.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="font-sans text-warm-gray-700 text-sm leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal list-outside ml-5 space-y-1.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="font-sans text-warm-gray-700 text-sm leading-relaxed">
          {item}
        </li>
      ))}
    </ol>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-hint-yellow/40 border border-hint-yellow rounded-xl p-5 my-4">
      {children}
    </div>
  );
}

/* ── Simple table component ── */
function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-sage-100">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left font-semibold text-sage-800 px-4 py-2.5 border border-powder-pink"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-soft-white"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-2.5 border border-powder-pink text-warm-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Steps table ── */
function StepsTable({
  rows,
}: {
  rows: { step: string; action: string }[];
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-sage-100">
            <th className="text-left font-semibold text-sage-800 px-4 py-2.5 border border-powder-pink w-24">Step</th>
            <th className="text-left font-semibold text-sage-800 px-4 py-2.5 border border-powder-pink">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-soft-white"}>
              <td className="px-4 py-2.5 border border-powder-pink text-warm-gray-700 font-semibold">{row.step}</td>
              <td className="px-4 py-2.5 border border-powder-pink text-warm-gray-700">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Divider ── */
function Divider() {
  return <hr className="border-powder-pink my-8" />;
}

/* ─────────────────────────────────────────── */

export default function ParentsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-sage-300 text-sm uppercase tracking-widest font-semibold mb-2">
            For Families
          </p>
          <h1 className="font-heading text-cream-50 text-4xl sm:text-5xl font-bold mb-4">
            Parent Handbook
          </h1>
          <div className="text-sage-300 text-sm space-y-0.5 mt-4">
            <p>300 Dundas St W, Whitby, ON L1N 2M5</p>
            <p>(647) 261-1323</p>
            <p>thewhitelotusmontessori@gmail.com</p>
            <p className="mt-2 text-sage-400">Last Updated: May 14th, 2026</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ── Welcome ── */}
        <SectionHeading>Welcome to White Lotus Montessori</SectionHeading>
        <P>
          Welcome to our Montessori community! We are delighted that you have chosen White Lotus
          Montessori for your child&apos;s early learning journey. This handbook provides important
          information about our program, policies, and procedures. Please read it carefully and keep
          it for future reference.
        </P>
        <P>
          At White Lotus Montessori, we believe every child is competent, capable, curious, and rich
          in potential. Our program is guided by the Montessori philosophy and aligned with{" "}
          <em>How Does Learning Happen? Ontario&apos;s Pedagogy for the Early Years</em> (HDLH). We
          are committed to providing a nurturing environment where your child can thrive, learn, and
          grow.
        </P>
        <P>
          If you have any questions about the information in this handbook, please do not hesitate to
          speak with our staff or Director.
        </P>

        <Divider />

        {/* ── Mission & Vision ── */}
        <SectionHeading>Mission</SectionHeading>
        <P>
          At White Lotus Montessori, we honour each child&apos;s natural path of development by
          creating a nurturing environment where curiosity, confidence, and independence can flourish.
          We believe every child holds unique potential, and through meaningful learning experiences,
          compassionate guidance, and respect for the whole child, we strive to help children grow
          into thoughtful, capable, and caring individuals who positively contribute to their
          community and the world around them.
        </P>

        <SectionHeading>Vision</SectionHeading>
        <P>
          To cultivate a peaceful and inspiring learning community where children are encouraged to
          think independently, explore confidently, and develop a lifelong love of learning within a
          warm, enriching, and child-centered environment.
        </P>

        <Divider />

        {/* ── Goals ── */}
        <SectionHeading>Our Goals for Your Child&apos;s Growth</SectionHeading>
        <P>
          At White Lotus Montessori, we thoughtfully prepare engaging and stimulating learning
          experiences that support the academic, emotional, social, and personal growth of every
          child. We strive to:
        </P>
        <BulletList
          items={[
            "Create a sense of order, security, and calm through consistent routines and a thoughtfully prepared classroom environment.",
            "Build self-confidence, emotional awareness, and resilience within a caring and supportive atmosphere where every child feels valued.",
            "Encourage independence and initiative by allowing children to make choices, solve problems, and take ownership of their learning experiences.",
            "Strengthen focus, concentration, and attention span through purposeful hands-on learning and uninterrupted work periods.",
            "Foster curiosity, imagination, and creative thinking through opportunities for exploration, discovery, and meaningful inquiry.",
            "Develop perseverance, responsibility, and pride by encouraging children to complete meaningful tasks and contribute positively to their environment.",
            "Nurture kindness, empathy, respect, and collaboration while helping children understand the importance of community and working together.",
            "Support the growth of self-discipline and intrinsic motivation through guidance, consistency, and engaging learning experiences.",
            "Develop a joyful and positive attitude toward learning through individualized experiences that reflect each child's unique strengths, interests, and readiness.",
            "Inspire a lifelong love of learning by encouraging wonder, confidence, personal growth, and a strong sense of capability every day.",
          ]}
        />

        <Divider />

        {/* ── Services ── */}
        <SectionHeading>Services Offered</SectionHeading>
        <SubHeading>Programs and Age Groups</SubHeading>
        <P>
          White Lotus Montessori is licensed by the Ministry of Education under the{" "}
          <em>Child Care and Early Years Act, 2014</em>. We offer the following programs:
        </P>
        <SimpleTable
          headers={["Program", "Age Range", "Capacity"]}
          rows={[
            ["Toddler Program", "18 months – 2.5 years", "15 children"],
            ["Casa Program", "2.5 – 6 years", "32 children"],
          ]}
        />

        <Divider />

        {/* ── Fees ── */}
        <SectionHeading>Fees</SectionHeading>
        <SubHeading>Base Fees</SubHeading>
        <P>The following are our base fees for child care services:</P>
        <SimpleTable
          headers={["Program", "Monthly Fee"]}
          rows={[
            ["Toddler Program – Full Day", "$1,450"],
            ["Casa Program – Full Day", "$1,325"],
          ]}
        />

        <Divider />

        {/* ── Registration ── */}
        <SectionHeading>Registration</SectionHeading>
        <P>
          As per the Ministry of Education&apos;s Child Care and Early Years Act (CCEYA) 2014, the
          following completed documents must be received and securely stored by the school before
          your child&apos;s first day at White Lotus Montessori:
        </P>
        <BulletList
          items={[
            "Registration Form",
            "Parental Contract",
            "Immunization Records",
            "Medication Information and Consent Form (if applicable)",
            "Anaphylaxis Alert and Emergency Plan (if applicable)",
            "Diaper Cream Authorization Form (if applicable)",
            "Sunscreen Authorization Form (if applicable)",
            "Sleep Consent Form (if applicable)",
            "Potassium Iodide Administration Consent Form",
            "Safe Arrival Policy",
          ]}
        />
        <InfoBox>
          <P>
            Until these documents are received, your child will not be able to attend White Lotus
            Montessori, even if all required fees have been paid.
          </P>
        </InfoBox>

        <Divider />

        {/* ── Operating Policies ── */}
        <SectionHeading>Operating Policies and Procedures</SectionHeading>

        <SubHeading>Waiting List Policy</SubHeading>
        <BulletList
          items={[
            "White Lotus Montessori does not charge a fee to join the waiting list.",
            "When space becomes available, families on the waiting list will be contacted in the order their names were added.",
            "Once contacted regarding an available space, families will have two (2) business days to complete the registration process and submit the required fees and documentation.",
            "If the school does not receive a response within the specified timeframe, it will be assumed that the family is no longer interested in the available placement, and the space may then be offered to the next family on the waiting list.",
          ]}
        />

        <SubHeading>Application and Enrollment Procedures</SubHeading>
        <BulletList
          items={[
            "An application fee of $250.00 is required for each new application to hold a space.",
            "This fee is non-refundable and is not included in or deducted from the tuition fee.",
          ]}
        />

        <SubHeading>Admission</SubHeading>
        <P>
          Admission to White Lotus Montessori is based on availability and is offered on a first
          come, first-served basis from our waiting list. To enrol your child, parents must:
        </P>
        <NumberedList
          items={[
            "Complete and submit all required registration forms",
            "Provide up-to-date immunization records (or valid exemption)",
            "Pay the non-refundable registration fee",
            "Pay the first month's fees and last month fees",
          ]}
        />
        <P>
          White Lotus Montessori serves children ages 18 months to 6 years old with full-day,
          before-school, and after-school programs from 7:00 a.m. to 6:00 p.m.
        </P>

        <SubHeading>Holidays</SubHeading>
        <P>White Lotus Montessori will be closed for the following statutory holidays:</P>
        <BulletList
          items={[
            "New Year's Day",
            "Family Day",
            "Good Friday",
            "Easter Monday",
            "Victoria Day",
            "Canada Day",
            "Civic Holiday",
            "Labour Day",
            "Thanksgiving Day",
            "Christmas Eve",
            "Christmas Day",
            "Boxing Day",
          ]}
        />
        <P>In addition, White Lotus Montessori will also be closed during:</P>
        <BulletList
          items={[
            "Winter Break (typically the last week of December and the first week of January)",
            "March Break (typically the second week of March)",
          ]}
        />

        <Divider />

        {/* ── Tuition ── */}
        <SectionHeading>Tuition and Fees</SectionHeading>
        <P>
          White Lotus Montessori is currently not enrolled in the CWELCC (Canada-Wide Early Learning
          and Child Care) Program.
        </P>
        <P>
          Annual tuition fees are based on a standard 10-month academic year running from September
          through June. Families may choose from the following payment options:
        </P>
        <BulletList items={["Payment in Full", "Monthly Installments"]} />

        <SubHeading>Refund Policy</SubHeading>
        <P>Tuition fees are non-refundable after acceptance into the program.</P>
        <P>There will be no deductions or refunds for:</P>
        <BulletList
          items={[
            "Withdrawal from the program",
            "Absences or non-attendance",
            "Holidays",
            "Sick days",
            "Vacation days",
            "Weather-related closures",
            "Other events beyond the school's control",
            "Missed days for any reason during the school year",
          ]}
        />
        <P>
          There are no make-up days or switching days for missed attendance. Refunds will only be
          issued in the event of an overpayment.
        </P>

        <SubHeading>Non-Base Fees</SubHeading>
        <BulletList
          items={[
            "Registration Fee (one-time, non-refundable): $250",
            "Late Pick-Up Fee: $1 per minute after 6:00 PM",
            "NSF/Returned Payment Fee: $25 per occurrence",
          ]}
        />

        <SubHeading>Summer Program</SubHeading>
        <P>
          Tuition for the July and August Summer Program will be payable via e-transfer to the
          school. Registration for the summer program will be based on a weekly schedule and rate.
        </P>
        <P>
          A 5% sibling discount will be applied to families with more than one child enrolled at
          White Lotus Montessori.
        </P>
        <P>
          Tuition fees at White Lotus Montessori are all-inclusive and include meals and school hours
          from 8:00 a.m. to 4:00 p.m. The After-School Program, running from 4:00 p.m. to 7:00
          p.m., will require an additional fee of $100.00 per month.
        </P>

        <SubHeading>Payment Methods</SubHeading>
        <InfoBox>
          <P>
            <strong>E-transfer to:</strong> thewhitelotusmontessori@gmail.com
          </P>
        </InfoBox>

        <SubHeading>Session Changes and Tuition Policies</SubHeading>
        <P>
          Any requested changes to your child&apos;s schedule or program sessions must be submitted
          in writing by completing a Session Change Request Form through the school administration.
          Requests must be received at least two (2) weeks prior to the beginning of the upcoming
          month.
        </P>
        <P>
          Please note that tuition installment plans do not exempt families from this policy.
          Parents/guardians are responsible for ensuring that all tuition and applicable fees are
          paid according to the school&apos;s payment schedule. For students enrolling after the
          academic year has begun, tuition fees will be adjusted on a prorated basis according to the
          child&apos;s start date.
        </P>

        <SubHeading>Tuition and Fee Adjustments</SubHeading>
        <P>
          White Lotus Montessori reserves the right to review and adjust tuition and/or program fees
          annually in response to operational expenses, program enhancements, and educational
          improvements.
        </P>
        <P>
          Families will receive written notice of any tuition or fee changes at least sixty (60)
          days before the new rates take effect. Updated fees will apply beginning with the next
          billing cycle or academic term following the notice period.
        </P>

        <Divider />

        {/* ── Safe Arrival ── */}
        <SectionHeading>Safe Arrival Policy</SectionHeading>
        <P>
          To support the safety and well-being of all children, parents/guardians are required to
          drop off and pick up their child(ren) at the designated arrival and dismissal areas during
          scheduled program hours.
        </P>
        <P>
          If a child will be absent or arriving late, parents/guardians must notify the school
          through email, voicemail, or direct communication with staff.
        </P>
        <P>
          If a child is absent without notification, classroom educators will report the absence to
          the administration team. Should the absence remain unconfirmed by 9:30 a.m., school
          administration will contact parents/guardians by phone until the child&apos;s whereabouts
          and safety have been confirmed.
        </P>

        <SubHeading>Pickup Policy</SubHeading>
        <P>
          To maintain a safe, respectful, and well-organized environment for all children and staff,
          families are expected to pick up their children no later than 7:00 p.m.
        </P>
        <P>
          Repeated late pickups may affect continued enrollment eligibility for the following school
          year. We appreciate families&apos; cooperation and consideration for our educators and
          program operations.
        </P>
        <P>
          If White Lotus Montessori is unable to contact parents/guardians or authorized emergency
          contacts by 7:00 p.m., appropriate authorities, including Children&apos;s Aid Society
          and/or local authorities, may be contacted in accordance with school policy and child
          safety procedures.
        </P>

        <SubHeading>Program Hours</SubHeading>
        <BulletList
          items={[
            "Full-Day Program: 7:00 a.m. – 4:00 p.m.",
            "After-School Program: 4:00 p.m. – 6:00 p.m. (additional fee of $100.00/month)",
          ]}
        />

        <SubHeading>Payment Policies and Late Fees</SubHeading>
        <BulletList
          items={[
            "A $50.00 administrative fee will apply to any returned, declined, or unsuccessful Pre-Authorized Debit (PAD) payment.",
            "Tuition payments received after the 5th of the month may be subject to a late fee of $50.00 for each additional week the payment remains outstanding.",
            "If an account becomes more than 30 days overdue, White Lotus Montessori reserves the right to suspend attendance until all outstanding balances and applicable fees have been paid in full.",
          ]}
        />

        <Divider />

        {/* ── Withdrawal ── */}
        <SectionHeading>Withdrawal and Discharge Policy</SectionHeading>
        <P>
          Families wishing to withdraw their child from White Lotus Montessori are required to
          provide a minimum of four (4) weeks written notice. All outstanding tuition fees and
          balances must be paid prior to the child&apos;s final day of attendance.
        </P>
        <P>
          White Lotus Montessori reserves the right to discontinue enrollment if, in the professional
          judgment of the classroom educators and administration, it is determined that the program is
          no longer the best fit for the child or the school community. In such cases, tuition fees
          will be adjusted on a prorated basis where applicable.
        </P>

        <SubHeading>Centre-Initiated Discharge</SubHeading>
        <P>
          White Lotus Montessori reserves the right to discharge a child in the following
          circumstances:
        </P>
        <BulletList
          items={[
            "Non-payment of fees",
            "Failure to comply with centre policies",
            "The centre is unable to meet the child's needs despite reasonable efforts and consultation with parents and specialists",
            "Behaviour that poses a risk to the safety of other children or staff",
          ]}
        />

        <Divider />

        {/* ── Field Trips ── */}
        <SectionHeading>Field Trips and Off-Site Activities</SectionHeading>
        <P>
          White Lotus Montessori may organize supervised walking excursions and educational outings
          within the local community as part of the learning experience, including:
        </P>
        <BulletList
          items={[
            "Neighbourhood walks",
            "Visits to local parks and playgrounds",
            "Field trips to community locations (library, fire station, etc.)",
          ]}
        />
        <P>
          Children who are unable to participate in scheduled field trips or off-site activities will
          be required to remain at home for the duration of the outing.
        </P>
        <P>
          Parents/guardians will be informed in advance of any field trips involving transportation,
          and notice will typically be provided at least one week prior to the scheduled activity.
          Staff-to-child ratios are maintained during all off-site activities, and safety procedures
          are followed at all times.
        </P>

        <Divider />

        {/* ── Parking ── */}
        <SectionHeading>Parking</SectionHeading>
        <P>
          Parking spaces are available on-site for drop-off and pick-up; however, spaces are limited.
          We kindly ask that parents complete drop-off and pick-up as quickly as possible to allow
          other families access to available spots. Please avoid leaving your vehicle parked for
          extended periods.
        </P>

        <Divider />

        {/* ── Health, Safety, Nutrition ── */}
        <SectionHeading>Health, Safety, and Nutrition</SectionHeading>

        <SubHeading>Illness Policy</SubHeading>
        <P>
          To protect the health of all children and staff, children must stay home if they have:
        </P>
        <BulletList
          items={[
            "Fever (38°C / 100.4°F or higher)",
            "Vomiting or diarrhea within the past 24 hours",
            "Undiagnosed rash",
            "Contagious illness (pink eye, chicken pox, strep throat, etc.)",
            "Any symptoms that prevent comfortable participation in the program",
          ]}
        />
        <P>
          Children who become ill at the centre will be isolated and parents will be contacted for
          immediate pick-up.
        </P>

        <SubHeading>Nutrition</SubHeading>
        <P>
          Meals and snacks are provided by the centre. We are committed to serving healthy, nutritious
          meals to support your child&apos;s growth and development.
        </P>

        <SubHeading>Emergency Management</SubHeading>
        <P>
          White Lotus Montessori has comprehensive emergency management policies and procedures in
          place to respond to various emergency situations including fire, severe weather, lockdown,
          and other emergencies.
        </P>
        <SubSubHeading>Parent Notification</SubSubHeading>
        <BulletList
          items={[
            "For evacuations requiring relocation: Parents will be contacted by phone and/or text message with information about the evacuation location.",
            "For lockdown situations: Parents will be notified once the situation has been resolved and it is safe to do so.",
            "Emergency contact information must be kept up-to-date at all times.",
          ]}
        />
        <InfoBox>
          <P>
            <strong>Designated emergency evacuation location:</strong> 405 Dundas St W, Whitby ON
            L1N 6A1 – Whitby Public Library – Central Library
          </P>
        </InfoBox>

        <SubHeading>Inclement Weather Policy</SubHeading>
        <P>
          In the event of severe weather conditions (e.g., snowstorm, ice storm), the centre may
          close or delay opening. Parents will be notified by email as early as possible. Please
          ensure your contact information is current. If the centre closes early due to weather,
          parents will be contacted for early pick-up.
        </P>

        <Divider />

        {/* ── Prohibited Practices ── */}
        <SectionHeading>Prohibited Practices</SectionHeading>
        <P>
          In accordance with Ontario Regulation 137/15, section 48, the following practices are
          strictly prohibited at White Lotus Montessori. No staff member, student, or volunteer
          shall engage in any of these practices:
        </P>
        <BulletList
          items={[
            "(a) Corporal punishment of the child",
            "(b) Deliberate use of harsh or degrading measures on the child that would humiliate the child or undermine his or her self-respect",
            "(c) Depriving the child of basic needs including food, shelter, clothing, or bedding",
            "(d) Locking the exits of the child care centre for the purpose of confining the child",
            "(e) Using a locked or lockable room or structure to confine the child if he or she has been separated from other children",
            "(f) Inflicting any bodily harm on children including making children eat or drink against their will",
          ]}
        />

        <Divider />

        {/* ── Parent Issues ── */}
        <SectionHeading>Parent Issues and Concerns Policy</SectionHeading>
        <P>
          At White Lotus Montessori, we value open communication and encourage parents and guardians
          to take an active role in their child&apos;s educational experience. We are committed to
          fostering respectful, positive, and collaborative relationships among children, families,
          educators, and staff.
        </P>
        <P>
          All concerns brought forward by parents or guardians will be taken seriously and addressed
          in a timely, fair, and respectful manner. Concerns may be shared verbally or in writing.
          An acknowledgement or initial response will generally be provided within one to two
          business days.
        </P>

        <SubHeading>Confidentiality</SubHeading>
        <P>
          All concerns, discussions, and records will be treated with confidentiality and sensitivity.
          Information will only be disclosed when required by law or by applicable governing
          authorities, including but not limited to the Ministry of Education, Children&apos;s Aid
          Society, law enforcement agencies, or professional regulatory bodies.
        </P>

        <SubHeading>Conduct Expectations</SubHeading>
        <P>
          Positive communication, mutual respect, and appropriate conduct are expected from
          parents/guardians, staff, educators, students, and visitors at all times. Harassment,
          discrimination, intimidation, or disrespectful behaviour will not be tolerated.
        </P>
        <P>
          If any individual feels threatened, uncomfortable, or verbally mistreated during an
          interaction, they may end the conversation immediately and report the matter to school
          administration.
        </P>

        <SubHeading>Concerns Regarding the Safety or Well-Being of a Child</SubHeading>
        <P>
          Under Ontario law, all individuals, including educators, staff members, and members of the
          public, have a duty to report suspected cases of child abuse or neglect. If a
          parent/guardian has concerns regarding the safety or well-being of a child, they are
          encouraged to contact the local Children&apos;s Aid Society (CAS) directly.
        </P>

        <SubHeading>Procedures for Parent Concerns</SubHeading>
        <StepsTable
          rows={[
            { step: "Step 1", action: "Discuss the concern with the appropriate Educator directly." },
            { step: "Step 2", action: "If unresolved, speak with the Centre Director." },
            { step: "Step 3", action: "If further follow-up is required, the matter will be reviewed by Management/Licensee." },
            { step: "Step 4", action: "Written documentation and follow-up actions will be recorded and maintained confidentially." },
            { step: "Step 5", action: "Parents/guardians will receive updates regarding the progress and outcome of the concern." },
          ]}
        />

        <Divider />

        {/* ── Supervision of Students/Volunteers ── */}
        <SectionHeading>Supervision of Students and Volunteers Policy</SectionHeading>
        <P>
          From time to time, White Lotus Montessori may welcome student interns and volunteers to
          support classroom learning experiences. All students, interns, and volunteers are required
          to follow the school&apos;s policies and procedures, including Ontario Regulation 137/15,
          s.11.1:
        </P>
        <BulletList
          items={[
            "Volunteers and students are never permitted to be alone with children and are not counted in staff-to-child ratios.",
            "Volunteers and students must be supervised by an employee of the centre at all times.",
            "All volunteers and students must have a valid Vulnerable Sector Check on file before interacting with children.",
            "Volunteers and students must review the centre's Program Statement and policies before interacting with children.",
          ]}
        />

        <Divider />

        {/* ── Emergency Management ── */}
        <SectionHeading>Emergency Management Policy</SectionHeading>
        <P>
          White Lotus Montessori maintains comprehensive Emergency Management Policies and Procedures
          to support the safety and well-being of all children, staff, and families. Families are
          required to provide current and accurate emergency contact information and must notify the
          school promptly of any updates or changes.
        </P>
        <P>
          In the event that evacuation becomes necessary, children will be safely relocated to Whitby
          Public Library, the school&apos;s designated emergency meeting location.
        </P>

        <SubHeading>Accident and Incident Reporting</SubHeading>
        <P>
          Accident or incident reports will be completed whenever a child experiences an injury,
          accident, or unusual incident while attending the program, regardless of severity.
          Parents/guardians may be asked to review and sign these reports for documentation purposes.
        </P>
        <P>
          Parents/guardians will be contacted promptly regarding any significant injury, including
          all head injuries.
        </P>

        <SubHeading>Smoke-Free Policy</SubHeading>
        <P>
          White Lotus Montessori follows all regulations outlined under the{" "}
          <em>Smoke-Free Ontario Act</em>. Smoking, vaping, or the use of tobacco or cannabis
          products is strictly prohibited on school property and within all childcare and educational
          areas.
        </P>

        <Divider />

        {/* ── Program Statement ── */}
        <SectionHeading>Program Statement</SectionHeading>
        <P>
          At White Lotus Montessori, we are committed to creating a nurturing, respectful, and
          enriching learning environment that supports the development of the whole child. Our
          educational philosophy is inspired by authentic Montessori principles while aligning with
          the Ministry of Education&apos;s framework,{" "}
          <em>How Does Learning Happen?</em> We believe that children are competent, capable,
          curious, and rich in potential.
        </P>
        <P>
          Our classrooms are thoughtfully prepared to encourage independence, concentration,
          creativity, collaboration, and joyful learning. We recognize that every child develops at
          their own pace and deserves an environment that honours their individuality, strengths,
          interests, and developmental needs.
        </P>

        <SubHeading>Our Program Goals</SubHeading>
        <P>Our program goals, aligned with Ontario Regulation 137/15, s.46(3), are to:</P>
        <BulletList
          items={[
            "Promote the health, safety, nutrition, and well-being of children",
            "Support positive and responsive interactions among children, parents, and staff",
            "Encourage positive communication and support children's self-regulation",
            "Foster exploration, play, and inquiry",
            "Provide child-initiated and adult-supported experiences",
            "Create positive, inclusive learning environments for all children",
            "Incorporate indoor/outdoor play, active play, rest, and quiet time",
            "Foster parent engagement and ongoing communication",
            "Involve local community partners",
            "Support staff in continuous professional learning",
            "Document and review the impact of our strategies",
          ]}
        />

        <SubHeading>Our Montessori Learning Environment</SubHeading>
        <P>
          Our classrooms are carefully designed to provide children with opportunities for purposeful
          exploration, independent learning, and hands-on discovery. Montessori materials are
          organized in a calm, orderly, and inviting environment that supports concentration,
          confidence, and self-motivation.
        </P>
        <P>The classroom environment supports:</P>
        <BulletList
          items={[
            "Language and communication development",
            "Mathematical understanding",
            "Practical life skills",
            "Sensory exploration",
            "Cultural studies and geography",
            "Creativity and problem-solving",
            "Emotional and social growth",
            "Fine and gross motor development",
          ]}
        />
        <P>
          Children are given uninterrupted periods of work time so they can fully engage in
          activities, repeat experiences, master concepts, and deepen their understanding through
          concentration and exploration.
        </P>

        <SubHeading>Mixed-Age Classrooms and Community Learning</SubHeading>
        <P>
          White Lotus Montessori values the importance of mixed-age learning communities. Children
          learn alongside peers of varying ages and developmental stages, creating opportunities for
          leadership, cooperation, empathy, and mentorship.
        </P>
        <P>
          Younger children benefit from observing and learning from older peers, while older children
          strengthen their knowledge and confidence by guiding and supporting younger classmates.
        </P>

        <SubHeading>Three-Year Learning Cycle</SubHeading>
        <P>
          Children benefit greatly from remaining within the same classroom community for multiple
          years. This continuity provides consistency, emotional security, and deeper relationships
          between children, educators, and peers. The three-year learning cycle allows children to:
        </P>
        <BulletList
          items={[
            "Develop strong foundations",
            "Build confidence and independence",
            "Strengthen concentration and focus",
            "Master concepts through repetition",
            "Experience leadership opportunities",
            "Learn through observation and collaboration",
          ]}
        />

        <SubHeading>Early Learning Goals and Expectations</SubHeading>
        <SubSubHeading>A Sense of Belonging</SubSubHeading>
        <P>
          Children are encouraged to develop meaningful relationships with educators and peers in a
          welcoming and inclusive environment. Through collaborative learning and shared experiences,
          children feel connected, valued, and supported.
        </P>
        <SubSubHeading>A Sense of Well-Being</SubSubHeading>
        <P>
          Children are supported in developing self-confidence, emotional awareness, self-regulation,
          and healthy daily habits. Practical life experiences encourage responsibility and care of
          self, others, and the environment.
        </P>
        <SubSubHeading>Opportunities for Engagement</SubSubHeading>
        <P>
          Children are actively engaged in hands-on experiences that encourage concentration,
          creativity, critical thinking, exploration, and problem-solving.
        </P>
        <SubSubHeading>Opportunities for Expression</SubSubHeading>
        <P>
          Children are encouraged to express themselves through conversation, movement, creativity,
          collaboration, and purposeful activity.
        </P>

        <SubHeading>Nurturing Physical Health and Well-Being</SubHeading>
        <P>
          Nutritious meals and snacks are provided daily, and we work closely with families to
          support individual dietary needs and allergy awareness. White Lotus Montessori maintains a
          nut-aware environment to help protect the safety of all children.
        </P>

        <SubHeading>Outdoor Learning and Physical Development</SubHeading>
        <P>
          Outdoor experiences are an important part of the daily routine at White Lotus Montessori.
          Children are provided with regular opportunities for movement, exploration, social
          interaction, and nature-based learning experiences. Outdoor environments encourage children
          to:
        </P>
        <BulletList
          items={[
            "Develop gross motor skills",
            "Build coordination and balance",
            "Explore nature and seasonal changes",
            "Participate in cooperative play",
            "Engage in creative and imaginative activities",
          ]}
        />

        <SubHeading>Rest and Sleep</SubHeading>
        <P>
          Children requiring rest periods during the day will be supported according to their
          developmental stage and individual needs. Families will be consulted regarding sleep
          routines and preferences to help ensure children feel comfortable and supported. Children
          will be supervised throughout rest periods in accordance with school policies and Ministry
          guidelines.
        </P>

        <SubHeading>Grace and Courtesy</SubHeading>
        <P>
          Grace and courtesy are essential elements of the Montessori environment. Educators model
          respectful communication, kindness, patience, and peaceful conflict resolution throughout
          the school day. Children are guided in learning how to speak respectfully to others, solve
          problems peacefully, listen actively, care for shared materials and spaces, develop empathy,
          and build positive relationships within the classroom community.
        </P>

        <SubHeading>Role of the Educator</SubHeading>
        <P>
          At White Lotus Montessori, educators serve as guides, observers, facilitators, and role
          models. They carefully observe each child&apos;s development, interests, and readiness in
          order to introduce meaningful activities that support growth and independence. Our educators
          strive to:
        </P>
        <BulletList
          items={[
            "Model calm and respectful behaviour",
            "Use clear and positive communication",
            "Encourage independence and problem-solving",
            "Support emotional and social development",
            "Create engaging and organized learning spaces",
            "Foster meaningful relationships with children and families",
          ]}
        />

        <SubHeading>Observation, Documentation, and Family Partnership</SubHeading>
        <P>
          Observation is an essential part of the Montessori approach. Educators carefully observe
          children&apos;s progress, interests, strengths, and developmental needs in order to
          thoughtfully plan activities and learning experiences. White Lotus Montessori values strong
          partnerships with families and encourages ongoing communication through regular updates,
          meetings, school events, and collaborative discussions.
        </P>

        <Divider />

        {/* ── Educators & School Policies ── */}
        <SectionHeading>Our Educators &amp; School Policies</SectionHeading>
        <P>
          At White Lotus Montessori, our educators play a meaningful role in guiding each child
          toward reaching their full potential. Montessori teachers serve as respectful and
          thoughtful guides who carefully observe, support, and encourage children as they develop
          independence, confidence, creativity, and a love of learning.
        </P>

        <SubHeading>Health &amp; Safety Commitment</SubHeading>
        <P>
          The safety and well-being of every child is a priority at White Lotus Montessori. All
          staff members are trained in CPR and Emergency First Aid for children.
        </P>

        <SubHeading>Policies, Procedures &amp; Individualized Plans</SubHeading>
        <P>
          White Lotus Montessori is committed to ensuring that all policies, procedures, and
          individualized plans required under the Child Care and Early Years Act (CCEYA) are fully
          implemented within the school. These policies and procedures are reviewed regularly, and at
          minimum annually.
        </P>

        <SubHeading>Staff Review &amp; Ongoing Responsibility</SubHeading>
        <P>
          All educators, volunteers, and placement students are required to review the school&apos;s
          Program Statement along with all policies and procedures required under O. Reg. 137/15.
        </P>

        <Divider />

        {/* ── Family Partnership ── */}
        <SectionHeading>Family Partnership &amp; School Community</SectionHeading>
        <P>
          We value strong relationships between educators and families and believe that open
          communication and shared experiences help support each child&apos;s growth and development.
          Throughout the school year, families are invited to participate in a variety of meaningful
          school events and learning opportunities.
        </P>

        <SubHeading>Classroom Experience Morning</SubHeading>
        <P>
          Parents are invited to attend a scheduled classroom observation and participation session
          during the school year. During this guided experience, families quietly observe the
          classroom environment, explore selected Montessori materials, and gain insight into the
          structure of the morning work cycle.
        </P>

        <SubHeading>Learning Celebration Evening</SubHeading>
        <P>
          Toward the end of the school year, families are welcomed into the classroom for a special
          evening led by the children. Students proudly share activities, lessons, and classroom
          experiences that have been meaningful to them throughout the year.
        </P>

        <SubHeading>Guest Speaker Series</SubHeading>
        <P>
          Each year, guest speakers and professionals may be invited to share knowledge and current
          research related to child development, education, health, and well-being.
        </P>

        <SubHeading>Parent–Teacher Interviews</SubHeading>
        <P>
          Two parent-teacher interviews will be scheduled during the school year. Families are able
          to book individual meeting times to discuss their child&apos;s progress, strengths, goals,
          and classroom experiences.
        </P>

        <SubHeading>Professional Development</SubHeading>
        <P>
          All educators and staff are expected to engage in ongoing professional development to
          enhance their knowledge, teaching practices, and understanding of child development.
        </P>

        <Divider />

        {/* ── Anaphylaxis ── */}
        <SectionHeading>Anaphylaxis Policy and Procedures</SectionHeading>
        <P>
          Anaphylaxis is a severe and potentially life-threatening allergic reaction. Preventing
          exposure to allergens and responding quickly in an emergency are essential to protecting
          children with severe allergies. This policy aligns with the requirements of{" "}
          <em>Sabrina&apos;s Law</em> and Ontario Regulation 137/15.
        </P>

        <SubHeading>Individualized Plans and Emergency Procedures</SubHeading>
        <P>
          Before a child begins attending the centre, the Director/designate will meet with the
          child&apos;s parent(s)/guardian(s) to gather information regarding any medical conditions,
          including whether the child has an anaphylactic allergy or is at risk of anaphylaxis. For
          every child diagnosed with an anaphylactic allergy, an individualized plan and emergency
          procedure will be created before the child starts attending the centre.
        </P>
        <P>The individualized plan will include:</P>
        <BulletList
          items={[
            "The child's specific allergens",
            "Symptoms and warning signs of an allergic reaction",
            "Monitoring and avoidance strategies",
            "Emergency procedures and treatment steps to follow during a reaction",
          ]}
        />
        <P>
          Each child&apos;s epinephrine auto-injector must remain with the child or be immediately
          accessible at all times.
        </P>

        <SubHeading>Strategies to Reduce Exposure to Allergens</SubHeading>
        <BulletList
          items={[
            "Foods with unknown ingredients will not be served.",
            "Foods labelled with “may contain” warnings will not be served in classrooms where children have allergies to those ingredients.",
            "The cook, caterer, or food provider must provide ingredient information for all meals and snacks.",
            "Educators will supervise children during meals and snacks to ensure food is not shared or exchanged.",
            "Craft materials, sensory items, and toys containing known allergens will not be used.",
          ]}
        />

        <SubHeading>Training</SubHeading>
        <P>
          The Director/designate, educators, students, and volunteers will receive annual training
          on recognizing the signs and symptoms of anaphylaxis, emergency response procedures, and
          administering epinephrine auto-injectors. Written records of all training sessions will be
          maintained by the child care centre.
        </P>

        <SubHeading>Glossary</SubHeading>
        <P>
          <strong>Anaphylaxis:</strong> A severe systemic allergic reaction which can be fatal,
          resulting in circulatory collapse or shock. Symptoms may include hives, swelling, coughing,
          wheezing, nausea, vomiting, pale/blue colour, weak pulse, or dizziness.
        </P>
        <P>
          <strong>Common allergens include:</strong> eggs, insect stings, latex, milk, mustard,
          peanuts, seafood, sesame, soy, sulphites, tree nuts, and wheat.
        </P>
        <P>
          <strong>Epinephrine:</strong> A drug used to treat allergic reactions, particularly
          anaphylaxis, often delivered through an auto-injector (e.g., EpiPen or Allerject).
        </P>

        <Divider />

        {/* ── Policies Available on Request ── */}
        <SectionHeading>Policies and Procedures Available Upon Request</SectionHeading>
        <BulletList
          items={[
            "Fire Safety and Evacuation Procedures",
            "Emergency Management Policies and Procedures",
            "Sanitary Practices Policies and Procedures",
            "Tuition and Fee Schedule",
            "After-School Program Policies",
            "Serious Occurrence Policies and Procedures",
            "Program Statement",
            "Program Statement Implementation Policy",
            "Safe Arrival Policy",
            "Waiting List Policy and Procedures",
            "Parent Issues and Concerns Policy",
            "Supervision of Students and Volunteers Policy",
            "Parent Concerns and Communication Policy and Procedures",
            "Outdoor Play Area and Playground Safety Policy",
            "Anaphylaxis and Allergy Awareness Policy and Procedures",
            "Criminal Reference Check and Vulnerable Sector Screening Policy",
            "Staff Training and Professional Development Policy",
            "Sleep Supervision Policy and Procedures",
            "Medication Administration and Medical Support Policy",
          ]}
        />

        <Divider />

        {/* ── Additional Resources ── */}
        <SectionHeading>Additional Resources</SectionHeading>
        <P>For more information about early years programming in Ontario:</P>
        <BulletList
          items={[
            "How Does Learning Happen? Ontario's Pedagogy for the Early Years: ontario.ca/page/how-does-learning-happen",
            "Child Care Licensing in Ontario: ontario.ca/page/child-care-rules-child-care-and-early-years-act",
            "Find and Pay for Child Care: ontario.ca/page/find-and-pay-child-care",
          ]}
        />

        <Divider />

        {/* ── Acknowledgment ── */}
        <SectionHeading>Parent Acknowledgment</SectionHeading>
        <div className="bg-soft-white border border-powder-pink rounded-2xl p-8 space-y-6">
          <P>
            I acknowledge that I have received and reviewed the White Lotus Montessori Parent
            Handbook. I understand the policies, procedures, and expectations outlined in this
            handbook.
          </P>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-sans text-warm-gray-600 text-sm mb-1">Parent/Guardian Name</p>
              <div className="border-b border-warm-gray-300 h-8" />
            </div>
            <div>
              <p className="font-sans text-warm-gray-600 text-sm mb-1">Child&apos;s Name</p>
              <div className="border-b border-warm-gray-300 h-8" />
            </div>
            <div>
              <p className="font-sans text-warm-gray-600 text-sm mb-1">Signature</p>
              <div className="border-b border-warm-gray-300 h-8" />
            </div>
            <div>
              <p className="font-sans text-warm-gray-600 text-sm mb-1">Date</p>
              <div className="border-b border-warm-gray-300 h-8" />
            </div>
          </div>
        </div>

        {/* ── Document Control ── */}
        <p className="font-sans text-warm-gray-400 text-xs text-center mt-10">
          Version 1.0 &nbsp;|&nbsp; Last Updated: May 14th, 2026
        </p>
      </div>
    </>
  );
}
