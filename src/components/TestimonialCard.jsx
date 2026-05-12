import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={`${testimonial.name} customer avatar`}
          className="h-14 w-14 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h3 className="text-lg font-black text-stone-950">
            {testimonial.name}
          </h3>
          <div className="mt-1 flex gap-1 text-amber-500" aria-label={`${testimonial.rating} star rating`}>
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star key={index} aria-hidden="true" size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-5 text-base leading-7 text-stone-600">
        {testimonial.comment}
      </p>
    </article>
  );
}
