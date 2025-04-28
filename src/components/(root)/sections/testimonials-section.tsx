import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialsCard } from "./cards/testimonials-card";

import { testimonials } from "@/constants";

export function Testimonials() {
  return (
    <section className="py-8 px-7 md:py-16 bg-secondary-dark-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:text-center md:items-center md:justify-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
            What They Say
          </p>

          <div className="flex flex-col mb-10 gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              Our User Kind Words
            </h2>
            <p className="text-secondary-light-300 text-base">
              Here are some testimonials from our user after using Spend.In to
              manage their business expenses.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between pb-12">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-sm md:max-w-7xl"
          >
            <CarouselContent className="items-stretch">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/3 h-auto"
                >
                  <div className="p-1 h-full">
                    <TestimonialsCard
                      title={testimonial.title}
                      testimonial={testimonial.testimonial}
                      avatarUrl={testimonial.avatarUrl}
                      name={testimonial.name}
                      position={testimonial.position}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
