import { ChefHat, HeartHandshake, Leaf, Sofa } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { aboutImage, featureHighlights } from "../data/siteContent";

const icons = [Leaf, ChefHat, Sofa, HeartHandshake];

export default function About() {
  return (
    <section id="about" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="section-shell grid items-center gap-8 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="overflow-hidden rounded-lg bg-stone-100 shadow-xl shadow-stone-900/10">
          <img
            src={aboutImage}
            alt="Guests enjoying a warm restaurant dining experience"
            className="h-72 w-full object-cover sm:h-[28rem]"
          />
        </div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About Savory Bites"
            title="Food made with care, served with warmth"
            description="At Savory Bites, we believe food is more than a meal. It is an experience shaped by fresh ingredients, thoughtful cooking, and hospitality that makes every visit feel personal."
          />

          <p className="mt-5 text-base leading-7 text-stone-600 sm:mt-6 sm:leading-8">
            Our chefs prepare every dish with traditional techniques and a
            passion for unforgettable flavor. Whether you are joining us for a
            family dinner, a romantic evening, or a casual lunch, we are here to
            make every moment special.
          </p>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
            {featureHighlights.map((feature, index) => {
              const Icon = icons[index];

              return (
                <article
                  key={feature.title}
                  className="rounded-lg border border-orange-100 bg-orange-50/60 p-4 sm:p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-stone-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
