import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-stone-50 py-12 sm:py-16 lg:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="What Our Customers Say"
          title="Trusted by guests who love good food"
          description="Our guests love the food, service, and atmosphere we create every day."
        />

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
