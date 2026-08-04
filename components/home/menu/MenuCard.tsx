import Image from "next/image";
import { MenuItem } from "./menuData";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:gap-5 sm:p-5">
      {/* Food Image */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Food Details */}
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            {/* Veg / Non-Veg Indicator */}
            <span
              className={`flex h-3 w-3 shrink-0 items-center justify-center rounded-sm border p-0.5 ${
                item.isVeg ? "border-green-600" : "border-red-600"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  item.isVeg ? "bg-green-600" : "bg-red-600"
                }`}
              />
            </span>

            <h3 className="truncate text-sm font-medium leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#E8501A] sm:text-base lg:text-lg">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Subcategory */}
        {item.subcategory && (
          <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">
            {item.subcategory}
          </p>
        )}

        {/* Description */}
        <p className="line-clamp-2 text-[11px] font-light leading-relaxed text-gray-500 sm:text-xs">
          {item.description}
        </p>
      </div>
    </div>
  );
}
