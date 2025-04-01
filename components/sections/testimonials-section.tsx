import { TestimonialCard } from "./testimonial-card"
import { TESTIMONIALS } from "@/lib/constants"

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">
          What People <span className="text-primary">Say About FinanceInsight</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  )
}