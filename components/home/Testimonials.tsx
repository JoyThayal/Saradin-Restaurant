export default function Page() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-5">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8501A] sm:text-xs">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-light leading-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Loved By Our{" "}
            <span className="font-serif italic text-[#E8501A]">Guests</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base lg:text-lg lg:leading-8">
            Hear what our guests say after experiencing authentic Bengali
            flavours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {[
            {
              name: "Shipra Adhikary Shaw",
              role: "Google Local Guide",
              review:
                "Very good and tasty food. Gondhoraj Chicken Fry and Bhapa Ilish were simply amazing.",
            },
            {
              name: "Rohit Sharma",
              role: "Customer",
              review:
                "Beautiful ambience, authentic Bengali dishes and friendly staff. Highly recommended.",
            },
            {
              name: "Ananya Das",
              role: "Food Blogger",
              review:
                "One of the best Bengali restaurants I've visited. Every dish was full of flavour.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="group rounded-[30px] border border-[#ECE7E2] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#E8501A] hover:shadow-2xl sm:p-7 lg:p-8"
            >
              <div className="mb-5 text-xl text-[#E8501A] sm:mb-6 sm:text-2xl">
                ★★★★★
              </div>

              <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                &quot;{item.review}&quot;
              </p>

              <div className="mt-7 flex items-center gap-4 sm:mt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8501A] text-base font-semibold text-white sm:h-14 sm:w-14 sm:text-lg">
                  {item.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <h4 className="truncate font-semibold text-[#1A1A1A]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[30px] border border-[#ECE7E2] bg-white px-6 py-6 text-center sm:mt-12 sm:px-8 md:mt-14 md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-light text-[#1A1A1A] sm:text-3xl">
              <span className="font-bold text-[#E8501A]">4.9</span>/5 Average
              Rating
            </h3>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Based on 500+ happy customer reviews.
            </p>
          </div>

          <a
            href="#reservation"
            className="w-full rounded-full bg-[#1A1A1A] px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-white transition hover:bg-[#E8501A] sm:w-auto"
          >
            Book A Table
          </a>
        </div>
      </div>
    </section>
  );
}
