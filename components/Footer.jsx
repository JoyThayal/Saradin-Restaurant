"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#E8501A] text-white select-none">
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-10 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16 lg:pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ================= ABOUT ================= */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-4">
            <h3 className="inline-block border-b border-white/20 pb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
              About Us
            </h3>

            <div className="flex items-start gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white p-1 shadow-md sm:h-24 sm:w-24">
                <Image
                  src="/images/logo.png"
                  alt="Saradin Restaurant Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">
                  Saradin Restaurant
                </h4>

                <p className="text-sm leading-7 font-light text-white/85">
                  Saradin your everyday restaurant for Bengali Cuisine.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="space-y-6 lg:col-span-4">
            <h3 className="inline-block border-b border-white/20 pb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <strong>Behala:</strong> +91-9147068081
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <strong>Jessore Road:</strong> +91-9147068083
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <strong>Anwar Shah Road:</strong> +91-9147068084
                </span>
              </li>

              <li className="flex items-start gap-3 break-all">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />

                <a
                  href="mailto:saradin@ddichospitality.com"
                  className="transition-colors hover:text-white hover:underline"
                >
                  saradin@ddichospitality.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />

                <a
                  href="https://wa.me/919147068080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white hover:underline"
                >
                  WhatsApp: 9147068080
                </a>
              </li>
            </ul>
          </div>

          {/* ================= LINKS ================= */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="inline-block border-b border-white/20 pb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
              User Links
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", href: "#about" },
                { name: "Menu", href: "#menu" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 font-light text-white/90 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="inline-block border-b border-white/20 pb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
              Follow Us
            </h3>

            <ul className="space-y-3 text-sm">
              {["Facebook", "Instagram", "YouTube"].map((social) => (
                <li key={social}>
                  <a
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/20 bg-black/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-xs text-white/90 sm:px-8 md:flex-row md:text-left lg:px-12">
          <div>Copyright © 2026 Saradin Restaurant. All Rights Reserved</div>

          <div>
            Website Designed by{" "}
            <strong className="font-semibold text-white">
              Digital Concepts
            </strong>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
