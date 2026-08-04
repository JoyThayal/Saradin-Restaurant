"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ==================== LEFT COLUMN ==================== */}
          <div className="relative lg:col-span-6">
            {/* Main Image */}
            <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl shadow-2xl sm:max-w-105 md:max-w-125">
              <Image
                src="/images/about-story.png"
                alt="Saradin Restaurant Heritage"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 right-0 hidden max-w-50 rounded-2xl border border-white/50 bg-white/90 p-6 text-center shadow-xl backdrop-blur-md sm:right-6 sm:block">
              <p className="font-serif text-3xl font-light italic text-[#E8501A]">
                100%
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                Authentic Bengal Heritage
              </p>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN ==================== */}
          <div className="space-y-6 md:space-y-8 lg:col-span-6">
            {/* Tag */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#E8501A]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E8501A] sm:text-xs">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-light leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              Preserving The Rich
              <br />
              <span className="font-serif font-normal italic text-[#E8501A]">
                Heritage Of Bengali Cuisine.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8">
              <p>
                The diverse and rich heritage of India is deeply ingrained in
                our culinary traditions. Bengali cuisine is not just a
                collection of cooked delicacies; it represents the undivided
                cultural heritage and eternal love for food.
              </p>

              <p>
                At Saradin, we endeavour to preserve these age-old recipes while
                adding a subtle modern touch. Every dish is prepared with
                garden-fresh ingredients, organic spices, and a passion for
                perfection.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-5 border-t border-gray-200/80 pt-6 sm:grid-cols-2 sm:gap-6">
              <div>
                <p className="text-xl font-light text-[#1A1A1A] sm:text-2xl">
                  Fresh & Organic
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                  Locally Sourced Spices
                </p>
              </div>

              <div>
                <p className="text-xl font-light text-[#1A1A1A] sm:text-2xl">
                  Master Chefs
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                  Passionate Cooking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
