"use client";

import Image from "next/image";
import { instagramPosts } from "./data/instagramPosts";

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 select-none"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ==================== HEADING ==================== */}
        <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E8501A]/20 bg-orange-50/80 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8501A]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E8501A] sm:text-xs">
              Social Gallery 📸
            </span>
          </div>

          <h2 className="text-3xl font-light leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Follow Us On{" "}
            <span className="font-serif font-normal italic text-[#E8501A]">
              Instagram.
            </span>
          </h2>

          <p className="text-sm font-medium tracking-wide text-gray-500 sm:text-base">
            @saradinrestaurant
          </p>
        </div>

        {/* ==================== POSTS ==================== */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:mb-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-4xl border border-black/5 bg-gray-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Video Icon */}
              {post.isVideo && (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-1 h-6 w-6 fill-current text-[#E8501A]"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  className="h-8 w-8 stroke-current text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* ==================== BUTTONS ==================== */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <button className="w-full rounded-full bg-[#1A1A1A] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8501A] hover:shadow-lg active:scale-95 sm:w-auto">
            LOAD MORE
          </button>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#E8501A] bg-orange-50/50 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#E8501A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8501A] hover:text-white hover:shadow-lg active:scale-95 sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
            </svg>

            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
