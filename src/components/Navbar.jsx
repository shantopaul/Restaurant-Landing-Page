import { Menu, X, Utensils } from "lucide-react";
import { useState } from "react";
import { navLinks, restaurant } from "../data/siteContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-stone-50/95 backdrop-blur">
      <nav
        className="section-shell flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 text-white shadow-sm">
            <Utensils aria-hidden="true" size={22} />
          </span>
          <span>
            <span className="block text-xl font-extrabold text-stone-950">
              {restaurant.name}
            </span>
            <span className="hidden text-xs font-semibold uppercase text-orange-600 sm:block">
              Fresh dining
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-stone-700 transition hover:text-orange-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Book a Table
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-stone-900 shadow-sm transition hover:border-orange-200 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-orange-100 bg-white shadow-lg lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-stone-700 transition hover:bg-orange-50 hover:text-orange-700"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
              onClick={closeMenu}
            >
              Book a Table
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
