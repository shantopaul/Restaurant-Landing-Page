import SectionHeader from "./SectionHeader";
import { galleryImages } from "../data/galleryImages";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 lg:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Food Gallery"
          title="A closer look at the Savory Bites table"
          description="Take a look at our delicious dishes and cozy dining atmosphere."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <figure
              key={item.id}
              className={`group overflow-hidden rounded-lg bg-stone-100 shadow-sm ${
                index === 0 || index === 5 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
