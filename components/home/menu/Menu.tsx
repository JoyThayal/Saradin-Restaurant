"use client";

import { useState } from "react";
import { categories, menuItems } from "./menuData";
import MenuCard from "./MenuCard";

const ITEMS_PER_LOAD = 6;

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Main Course");
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_LOAD);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ================= Header ================= */}
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-12">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#E8501A]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E8501A] sm:text-xs">
              Culinary Delights
            </span>

            <span className="h-px w-6 bg-[#E8501A]" />
          </div>

          <h2 className="text-3xl font-light tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="font-serif font-normal italic text-[#E8501A]">
              Special Menu
            </span>
          </h2>

          <p className="mx-auto max-w-lg text-sm leading-7 font-light text-gray-500 sm:text-base">
            Handcrafted with authentic spices and fresh local ingredients.
          </p>
        </div>

        {/* ================= Categories ================= */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-3 no-scrollbar md:justify-center lg:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleItems(ITEMS_PER_LOAD);
              }}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest transition-all duration-300 sm:px-6 sm:py-3 sm:text-xs ${
                activeCategory === cat
                  ? "bg-[#1A1A1A] text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-orange-50 hover:text-[#E8501A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= Menu Grid ================= */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
          {filteredItems.slice(0, visibleItems).map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* ================= Load More ================= */}
        {visibleItems < filteredItems.length && (
          <div className="mt-10 text-center lg:mt-12">
            <button
              onClick={() =>
                setVisibleItems((prev) =>
                  Math.min(prev + ITEMS_PER_LOAD, filteredItems.length),
                )
              }
              className="rounded-full border border-[#E8501A] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8501A] transition-all duration-300 hover:bg-[#E8501A] hover:text-white sm:px-8 sm:py-4 sm:text-xs"
            >
              Load More
            </button>
          </div>
        )}

        {/* ================= Download PDF ================= */}
        <div className="mt-12 text-center lg:mt-14">
          <a
            href="/full-menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#E8501A] px-7 py-3 text-[11px] font-semibold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#d44313] hover:shadow-lg sm:px-8 sm:py-4 sm:text-xs"
          >
            Download Full Menu 📄
          </a>
        </div>
      </div>
    </section>
  );
}
