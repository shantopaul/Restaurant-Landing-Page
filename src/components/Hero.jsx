import { ArrowRight, CalendarCheck, PlayCircle } from "lucide-react";
import { heroImage, restaurant } from "../data/siteContent";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-stone-50">
      <div className="absolute inset-x-0 top-0 h-32 bg-orange-100/60 sm:h-40" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(100svh-4rem)] items-center gap-10 py-10 sm:py-14 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-orange-600">
            {restaurant.tagline}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.08] text-stone-950 sm:mt-5 sm:text-5xl lg:text-6xl">
            Experience the Taste of Fresh, Authentic Cuisine
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:mt-6 sm:text-lg sm:leading-8">
            Discover handcrafted dishes made with fresh ingredients, rich
            flavors, and a warm dining experience that feels like home.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href="#reservation"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:px-7 sm:py-4"
            >
              <CalendarCheck aria-hidden="true" size={20} />
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-stone-950 shadow-sm transition hover:border-orange-300 hover:text-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-100 sm:px-7 sm:py-4"
            >
              <PlayCircle aria-hidden="true" size={20} />
              View Menu
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-orange-100 pt-6 sm:mt-10 sm:gap-4 sm:pt-8">
            <div className="min-w-0">
              <strong className="block text-xl font-black text-stone-950 sm:text-2xl">12+</strong>
              <span className="text-sm font-medium text-stone-600">Chef specials</span>
            </div>
            <div className="min-w-0">
              <strong className="block text-xl font-black text-stone-950 sm:text-2xl">4.9</strong>
              <span className="text-sm font-medium text-stone-600">Guest rating</span>
            </div>
            <div className="min-w-0">
              <strong className="block text-xl font-black text-stone-950 sm:text-2xl">7d</strong>
              <span className="text-sm font-medium text-stone-600">Open weekly</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-lg bg-stone-900 shadow-2xl shadow-stone-900/20">
            <img
              src={heroImage}
              alt="Restaurant table filled with fresh dishes at Savory Bites"
              className="h-[22rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/94 p-4 shadow-xl backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
              <p className="text-xs font-bold uppercase text-orange-600 sm:text-sm">
                Today&apos;s pick
              </p>
              <div className="mt-2 flex items-end justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <h2 className="text-lg font-black text-stone-950 sm:text-xl">
                    Grilled Chicken Steak
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-stone-600">
                    Signature sauce, seasonal vegetables, perfect char.
                  </p>
                </div>
                <ArrowRight aria-hidden="true" className="shrink-0 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
