"use client";

import Image from "next/image";

interface LocationItem {
  id: number;
  name: string;
  landmark: string;
  phone: string;
  image: string;
  mapUrl: string;
  reviewUrl: string;
}

const locations: LocationItem[] = [
  {
    id: 1,
    name: "Behala",
    landmark: "James Long Sarani, Near M.P. Birla School",
    phone: "+91 91470 68081",
    image: "/images/location-behala.png",
    mapUrl: "https://maps.google.com",
    reviewUrl: "https://google.com",
  },
  {
    id: 2,
    name: "Jessore Road",
    landmark: "Near Birati More, Kolkata",
    phone: "+91 91470 68083",
    image: "/images/location-jessore.png",
    mapUrl: "https://google.com",
    reviewUrl: "https://google.com",
  },
  {
    id: 3,
    name: "Anwar Shah Road",
    landmark: "Near South City Mall, Opposite Taltala Ground",
    phone: "+91 91470 68084",
    image: "/images/location-anwar.png",
    mapUrl: "https://maps.google.com",
    reviewUrl: "https://google.com",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Title */}
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#E8501A]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E8501A] sm:text-xs">
              Visit Us
            </span>

            <span className="h-px w-6 bg-[#E8501A]" />
          </div>

          <h2 className="text-3xl font-light tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="font-serif font-normal italic text-[#E8501A]">
              Locations
            </span>
          </h2>

          <p className="mx-auto max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            Find your nearest Saradin Restaurant and enjoy authentic flavors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 sm:h-60">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A] shadow-sm backdrop-blur-md">
                  Kolkata
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between space-y-5 p-5 sm:p-7 lg:p-8">
                <div>
                  <h3 className="text-xl font-light text-[#1A1A1A] transition-colors group-hover:text-[#E8501A] sm:text-2xl">
                    {loc.name}
                  </h3>

                  <p className="mt-3 min-h-11 text-sm leading-6 text-gray-500">
                    📍 {loc.landmark}
                  </p>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="flex items-center gap-2 text-sm font-medium text-gray-800">
                      <span className="text-[#E8501A]">📞</span>
                      {loc.phone}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 text-xs font-medium text-gray-700 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:text-[#E8501A]"
                  >
                    🗺️ Get Map
                  </a>

                  <a
                    href={loc.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center rounded-xl bg-[#1A1A1A] px-4 text-xs font-medium text-white transition-all duration-300 hover:bg-[#E8501A]"
                  >
                    ⭐ Google Review
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
