import { ArrowRight, CalendarCheck, PlayCircle } from "lucide-react";
import { heroImage, restaurant } from "../data/siteContent";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-stone-50">
      <div className="absolute inset-x-0 top-0 h-40 bg-orange-100/60" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-orange-600">
            {restaurant.tagline}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] text-stone-950 sm:text-5xl lg:text-6xl">
            Experience the Taste of Fresh, Authentic Cuisine
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Discover handcrafted dishes made with fresh ingredients, rich
            flavors, and a warm dining experience that feels like home.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              <CalendarCheck aria-hidden="true" size={20} />
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-4 text-base font-bold text-stone-950 shadow-sm transition hover:border-orange-300 hover:text-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-100"
            >
              <PlayCircle aria-hidden="true" size={20} />
              View Menu
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-orange-100 pt-8">
            <div>
              <strong className="block text-2xl font-black text-stone-950">12+</strong>
              <span className="text-sm font-medium text-stone-600">Chef specials</span>
            </div>
            <div>
              <strong className="block text-2xl font-black text-stone-950">4.9</strong>
              <span className="text-sm font-medium text-stone-600">Guest rating</span>
            </div>
            <div>
              <strong className="block text-2xl font-black text-stone-950">7d</strong>
              <span className="text-sm font-medium text-stone-600">Open weekly</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-lg bg-stone-900 shadow-2xl shadow-stone-900/20">
            <img
              src={heroImage}
              alt="Restaurant table filled with fresh dishes at Savory Bites"
              className="h-[28rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/94 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-bold uppercase text-orange-600">
                Today&apos;s pick
              </p>
              <div className="mt-2 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black text-stone-950">
                    Grilled Chicken Steak
                  </h2>
                  <p className="mt-1 text-sm text-stone-600">
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
