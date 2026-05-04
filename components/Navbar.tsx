"use client";

import Link from "next/link";
import { useState } from "react";
import LogoSVG from "@/components/LogoSVG";

const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "PROGRAMS", href: "/programs" },
  { label: "ADMISSIONS", href: "/admissions" },
  { label: "PARENTS", href: "/parents" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-soft-white border-b border-powder-pink/50 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Left — logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
          <LogoSVG />
        </Link>

        {/* Center — desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-sage-green text-[0.7rem] uppercase tracking-widest hover:text-olive-green transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/admissions"
            className="hidden lg:inline-flex items-center bg-olive-green hover:bg-sage-green text-white font-sans text-[0.7rem] uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors flex-shrink-0"
          >
            BOOK A TOUR
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-5 bg-sage-green transition-all duration-200 origin-center ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-sage-green transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-sage-green transition-all duration-200 origin-center ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-soft-white border-t border-powder-pink/50 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sage-green text-sm uppercase tracking-widest hover:text-olive-green transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/admissions"
                className="inline-flex items-center bg-olive-green hover:bg-sage-green text-white font-sans text-[0.7rem] uppercase tracking-widest px-6 py-3 rounded-full transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                BOOK A TOUR
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
