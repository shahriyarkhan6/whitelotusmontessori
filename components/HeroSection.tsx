import Link from "next/link";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function HeroSection({
  headline = "Nurturing Curious Minds",
  subheadline = "A warm, prepared environment where children aged 18 months to 6 years discover the joy of learning at their own pace — guided by certified Montessori educators in the heart of Whitby, Ontario.",
  ctaLabel = "Join Waiting List",
  ctaHref = "/admissions",
}: HeroSectionProps) {
  return (
    <div className="relative bg-sage-800 overflow-hidden">
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-terra-400 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <span className="inline-block bg-terra-500/20 text-terra-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Licensed Montessori Childcare · Whitby, ON
          </span>
          <h1 className="font-heading text-cream-50 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-sage-200 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            {subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={ctaHref}
              className="inline-block bg-terra-500 hover:bg-terra-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base shadow-lg"
            >
              {ctaLabel}
            </Link>
            <Link
              href="/programs"
              className="inline-block bg-white/10 hover:bg-white/20 text-cream-100 font-semibold px-8 py-3.5 rounded-full transition-colors text-base border border-white/20"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
