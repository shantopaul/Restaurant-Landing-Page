import { Clock, Mail, MapPin, Phone, Utensils } from "lucide-react";
import { navLinks, restaurant } from "../data/siteContent";

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-950 text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.9fr_0.7fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 text-white">
                <Utensils aria-hidden="true" size={22} />
              </span>
              <span className="text-2xl font-black">{restaurant.name}</span>
            </a>
            <p className="mt-5 max-w-sm leading-7 text-stone-300">
              {restaurant.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-orange-300">
              Quick Links
            </h2>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-stone-300 transition hover:text-orange-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-orange-300">
              Contact
            </h2>
            <div className="mt-5 space-y-4 text-sm text-stone-300">
              <p className="flex gap-3">
                <MapPin className="shrink-0 text-orange-300" aria-hidden="true" size={18} />
                <span>{restaurant.location}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="shrink-0 text-orange-300" aria-hidden="true" size={18} />
                <span>{restaurant.phone}</span>
              </p>
              <p className="flex gap-3">
                <Mail className="shrink-0 text-orange-300" aria-hidden="true" size={18} />
                <span>{restaurant.email}</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-orange-300">
              Opening Hours
            </h2>
            <div className="mt-5 flex gap-3 text-sm leading-6 text-stone-300">
              <Clock className="mt-1 shrink-0 text-orange-300" aria-hidden="true" size={18} />
              <div>
                {restaurant.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {restaurant.socials.map((social) => (
                <a
                  key={social}
                  href="#contact"
                  className="text-sm font-semibold text-stone-300 transition hover:text-orange-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-stone-400">
          <p>Copyright 2026 Savory Bites. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
