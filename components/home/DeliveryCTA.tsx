"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function DeliveryCTA() {
  const outlets = [
    {
      location: "Behala",
      phone: "+91 91470 68081",
      rawPhone: "+919147068081",
    },
    {
      location: "Jessore Road",
      phone: "+91 91470 68083",
      rawPhone: "+919147068083",
    },
    {
      location: "Anwar Shah Road",
      phone: "+91 91470 68084",
      rawPhone: "+919147068084",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] px-5 py-5 sm:px-8 sm:py-8 lg:p-10">
      <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] py-12 sm:py-14 lg:py-16">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#E8501A]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* ================= LEFT ================= */}
            <div className="space-y-6 border-b border-white/10 pb-10 text-center lg:col-span-5 lg:border-r lg:border-b-0 lg:pb-0 lg:pr-10 lg:text-left">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8501A] sm:text-xs">
                Craving Delicious Food? 🛵
              </span>

              <h3 className="text-3xl font-light tracking-tight sm:text-4xl">
                Order Online{" "}
                <span className="font-serif italic text-[#E8501A]">
                  Instantly
                </span>
              </h3>

              <p className="mx-auto max-w-md text-sm leading-7 text-gray-400 lg:mx-0">
                Get your favourite authentic Bengali dishes delivered hot &
                fresh to your doorstep.
              </p>

              {/* Delivery Buttons */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-lg transition-all duration-300 hover:bg-[#FC8019] hover:text-white group"
                >
                  <span>Order on</span>
                  <span className="text-sm font-extrabold text-[#FC8019] group-hover:text-white">
                    Swiggy
                  </span>
                </a>

                <a
                  href="https://www.zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-lg transition-all duration-300 hover:bg-[#CB202D] hover:text-white"
                >
                  <span>Order on</span>
                  <span className="text-sm font-extrabold text-[#CB202D] group-hover:text-white">
                    Zomato
                  </span>
                </a>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="space-y-6 lg:col-span-7">
              <div className="text-center lg:text-left">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8501A] sm:text-xs">
                  Direct Catering & Delivery 📞
                </span>

                <h3 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
                  Home Delivery &{" "}
                  <span className="font-serif italic text-[#E8501A]">
                    Catering Services
                  </span>
                </h3>
              </div>

              {/* Outlet Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {outlets.map((outlet) => (
                  <a
                    key={outlet.location}
                    href={`tel:${outlet.rawPhone}`}
                    className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-[#E8501A]/50 hover:bg-white/10"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      📍 {outlet.location}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white transition-colors hover:text-[#E8501A]">
                      {outlet.phone}
                    </p>
                  </a>
                ))}
              </div>

              {/* WhatsApp */}
              <div className="flex justify-center pt-2 lg:justify-start">
                <a
                  href="https://wa.me/919147068081?text=Hi%2C%20I%20want%20to%20order%20food!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-green-500/20 sm:w-auto sm:px-8 sm:text-xs"
                >
                  <FaWhatsapp className="w-5 h-5 text-white hover:text-gray-200" />

                  <span>Click to Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
