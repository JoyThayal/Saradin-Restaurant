"use client";

import Image from "next/image";
import { instagramPosts } from "./data/instagramPosts";
import {FaInstagram} from "react-icons/fa";

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
            <FaInstagram className="h-5 w-5" />

            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
