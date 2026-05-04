"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cream-50 border-b border-warm-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
          <div className="w-8 h-8 rounded-full bg-sage-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold leading-none">W</span>
          </div>
          <span
            className="font-heading text-sage-800 text-lg font-semibold leading-tight group-hover:text-sage-600 transition-colors"
          >
            White Lotus Montessori
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-warm-gray-700 hover:text-sage-600 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/admissions"
              className="bg-terra-500 hover:bg-terra-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Book a Tour
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-warm-gray-700 transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-warm-gray-700 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-warm-gray-700 transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-100 border-t border-warm-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-warm-gray-800 hover:text-sage-600 text-base font-medium transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/admissions"
                className="block text-center bg-terra-500 hover:bg-terra-600 text-white text-base font-medium px-4 py-2.5 rounded-full transition-colors mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Book a Tour
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
