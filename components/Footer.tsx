import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-cream-100 text-xl font-semibold mb-3">
              White Lotus Montessori
            </h3>
            <p className="text-sage-300 text-sm leading-relaxed">
              A licensed Montessori childcare centre nurturing curious, confident, and compassionate children in Whitby, Ontario.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cream-100 font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sage-300 hover:text-cream-100 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream-100 font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <address className="not-italic space-y-2 text-sage-300 text-sm">
              <p>300 Dundas St W, Whitby, ON L1N 2M5</p>
              <p>
                <a href="tel:+16472611323" className="hover:text-cream-100 transition-colors">
                  647-261-1323
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@whitelotusmontessori.com"
                  className="hover:text-cream-100 transition-colors"
                >
                  info@whitelotusmontessori.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sage-400 text-xs">
            &copy; {new Date().getFullYear()} White Lotus Montessori. All rights reserved.
          </p>
          <p className="text-sage-500 text-xs">
            Licensed by the Ministry of Education, Ontario
          </p>
        </div>
      </div>
    </footer>
  );
}
