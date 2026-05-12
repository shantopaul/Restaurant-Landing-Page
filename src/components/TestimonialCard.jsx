import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl sm:p-6">
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={`${testimonial.name} customer avatar`}
          className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
          loading="lazy"
        />
        <div>
          <h3 className="text-base font-black text-stone-950 sm:text-lg">
            {testimonial.name}
          </h3>
          <div className="mt-1 flex gap-1 text-amber-500" aria-label={`${testimonial.rating} star rating`}>
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star key={index} aria-hidden="true" size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-base leading-7 text-stone-600 sm:mt-5">
        {testimonial.comment}
      </p>
    </article>
  );
}
