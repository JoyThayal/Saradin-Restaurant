"use client";

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
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-1.001z" />
                  </svg>

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
