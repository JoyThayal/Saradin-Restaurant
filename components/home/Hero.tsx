"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const foodImages = [
  { id: 1, src: "/images/hero-1.png", alt: "Food Image 1" },
  { id: 2, src: "/images/hero-2.png", alt: "Food Image 2" },
  { id: 3, src: "/images/hero-3.png", alt: "Food Image 3" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % foodImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 lg:pt-44 lg:pb-28">
      {/* Background */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <div className="order-2 space-y-6 md:space-y-8 lg:order-1">
            {/* Tag */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#E8501A]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8501A] sm:text-xs">
                Est. Saradin Restaurant
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-light leading-[1.08] tracking-tight text-[#1A1A1A]"
              style={{
                fontSize: "clamp(2.6rem,7vw,5.2rem)",
              }}
            >
              Flavors Crafted
              <br />
              <span className="font-serif italic text-[#E8501A]">
                With Tradition.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-[15px] leading-7 text-gray-600 sm:text-base md:text-lg md:leading-8">
              Experience authentic Bengali & Asian delicacies prepared with
              freshly sourced local ingredients and time-honored recipes.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Link
                href="#menu"
                className="w-full rounded-full bg-[#1A1A1A] px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8501A] hover:shadow-xl sm:w-auto"
              >
                View Our Menu 🍽️
              </Link>

              <Link
                href="#reservation"
                className="group flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] transition hover:text-[#E8501A] sm:w-auto sm:justify-start"
              >
                <span>Book A Table</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Info */}
            <div className="grid gap-5 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:flex lg:items-center lg:gap-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  Kolkata, West Bengal
                </p>
              </div>

              <div className="hidden h-6 w-px bg-gray-200 lg:block" />

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                  Opening Hours
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  12:00 PM – 10:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-1 flex flex-col items-center lg:order-2 lg:items-end">
            <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-4xl bg-gray-100 shadow-2xl sm:max-w-md md:max-w-lg lg:max-w-xl">
              {foodImages.map((img, index) => (
                <div
                  key={img.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="mt-5 flex justify-center gap-3 lg:mt-6">
              {foodImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentIndex === idx
                      ? "w-8 bg-[#E8501A]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
