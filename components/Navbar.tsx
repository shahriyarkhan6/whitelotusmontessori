"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../images/logo.png";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROGRAMS", href: "/programs" },
  { label: "ADMISSIONS", href: "/admissions" },
  { label: "PARENTS", href: "/parents" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0d3204] border-b border-white/10 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 lg:py-1 flex items-center justify-between gap-8">
        {/* Left — logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
          <Image src={logo} alt="White Lotus Montessori School" className="h-[11.75rem] w-auto" priority />
        </Link>

        {/* Center — desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-white/90 text-sm uppercase tracking-widest hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/waitlist"
            className="hidden lg:inline-flex items-center bg-white hover:bg-hint-yellow text-sage-green font-sans text-sm uppercase tracking-widest px-6 py-3 rounded-full transition-colors flex-shrink-0"
          >
            JOIN WAITING LIST
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-200 origin-center ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-200 origin-center ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d3204] border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-white/90 text-sm uppercase tracking-widest hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/waitlist"
                className="inline-flex items-center bg-white hover:bg-hint-yellow text-sage-green font-sans text-[0.7rem] uppercase tracking-widest px-6 py-3 rounded-full transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                JOIN WAITING LIST
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
