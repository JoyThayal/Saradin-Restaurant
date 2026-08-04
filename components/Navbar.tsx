"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 1. Left: Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Saradin Restaurant Logo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-[#E8501A] transition-colors">
              SARADIN
            </span>
          </Link>

          {/* 2. Middle: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium hover:text-[#E8501A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8501A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 3. Right: Call To Action (CTA) Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#order"
              className="bg-[#E8501A] hover:bg-[#d44313] text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              Order Online 🍕
            </Link>
          </div>

          {/* 4. Mobile Menu Animated Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.25 text-gray-700 focus:outline-none p-2 rounded-lg"
              aria-label="Toggle Menu"
            >
              {/* Top Line */}
              <span
                className={`w-6 h-[2.5px] bg-gray-800 rounded-full transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-[7.5px] bg-[#E8501A]"
                    : ""
                }`}
              />
              {/* Middle Line */}
              <span
                className={`w-6 h-[2.5px] bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              {/* Bottom Line */}
              <span
                className={`w-6 h-[2.5px] bg-gray-800 rounded-full transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-[-7.5px] bg-[#E8501A]"
                    : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* 5. Mobile Dropdown Menu with Smooth Transition */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-87.5 opacity-100 mt-3 pt-3 pb-4 border-t border-gray-100"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-[#E8501A] hover:bg-orange-50 px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#order"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center bg-[#E8501A] hover:bg-[#d44313] text-white font-semibold px-5 py-2.5 rounded-full shadow-md transition-all active:scale-95"
            >
              Order Online 🍕
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
