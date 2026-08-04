"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "Ambience" | "Food" | "Catering Services";
  size: "large" | "tall" | "wide" | "normal";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/gallery-1.png",
    alt: "Bengali Special Grand Thali",
    category: "Food",
    size: "large",
  },
  {
    id: 2,
    src: "/gallery/gallery-2.png",
    alt: "Heritage Decor",
    category: "Ambience",
    size: "normal",
  },
  {
    id: 3,
    src: "/gallery/gallery-3.png",
    alt: "Signature Kosha Mangsho",
    category: "Food",
    size: "tall",
  },
  {
    id: 4,
    src: "/gallery/gallery-4.png",
    alt: "Cozy Dining Ambience",
    category: "Ambience",
    size: "normal",
  },
  {
    id: 5,
    src: "/gallery/gallery-5.png",
    alt: "Iconic Plate Wall Art",
    category: "Ambience",
    size: "wide",
  },
  {
    id: 6,
    src: "/gallery/gallery-6.png",
    alt: "Catering Event Management",
    category: "Catering Services",
    size: "normal",
  },
  {
    id: 7,
    src: "/gallery/gallery-7.png",
    alt: "Gondhoraj Chicken Starter",
    category: "Food",
    size: "normal",
  },
];

const filterCategories = ["All", "Ambience", "Food", "Catering Services"];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const getBentoSpan = (size: GalleryItem["size"]) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2 h-[340px] sm:h-[380px] md:h-full";

      case "tall":
        return "md:col-span-1 md:row-span-2 h-[340px] sm:h-[380px] md:h-full";

      case "wide":
        return "md:col-span-2 md:row-span-1 h-[240px] sm:h-[260px]";

      default:
        return "md:col-span-1 md:row-span-1 h-[240px] sm:h-[260px]";
    }
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: "url('/images/gallery-bg.png')",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-12">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#E8501A]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E8501A] sm:text-xs">
              Visual Experience 📸
            </span>

            <span className="h-px w-6 bg-[#E8501A]" />
          </div>

          <h2 className="text-3xl font-light tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="font-serif font-normal italic text-[#E8501A]">
              Gallery
            </span>
          </h2>

          <p className="mx-auto max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
            Take a glance at our warm ambience, mouth-watering delicacies and
            memorable events.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-3 no-scrollbar md:justify-center lg:mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest transition-all duration-300 sm:px-6 sm:text-xs ${
                activeTab === cat
                  ? "bg-[#E8501A] text-white shadow-md shadow-orange-500/20"
                  : "border border-black/5 bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-65">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-md transition-all duration-500 hover:shadow-xl ${getBentoSpan(
                activeTab === "All" ? item.size : "normal",
              )}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center lg:mt-14">
          <button className="inline-flex items-center gap-2 rounded-full bg-[#E8501A] px-7 py-3 text-[11px] font-semibold uppercase tracking-widest text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:bg-[#d44313] hover:shadow-orange-500/30 sm:px-8 sm:py-4 sm:text-xs">
            <span>View All Gallery</span>
            <span>🖼️</span>
          </button>
        </div>
      </div>
    </section>
  );
}
