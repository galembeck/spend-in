import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/constants";
import { TestimonialsCard } from "./cards/testimonials-card";

export function Testimonials() {
  return (
    <section className="bg-secondary-dark-700 px-7 py-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:items-center md:justify-center md:text-center">
          <p className="mb-2 font-semibold text-primary text-sm uppercase tracking-wide">
            What They Say
          </p>

          <div className="mb-10 flex flex-col gap-3">
            <h2 className="font-bold text-3xl text-white leading-snug md:text-4xl">
              Our User Kind Words
            </h2>
            <p className="text-base text-secondary-light-300">
              Here are some testimonials from our user after using Spend.In to
              manage their business expenses.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 pb-12 lg:flex-row">
          <Carousel
            className="w-full max-w-sm md:max-w-7xl"
            opts={{
              align: "center",
            }}
          >
            <CarouselContent className="items-stretch">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  className="h-auto basis-full md:basis-1/3"
                  // biome-ignore lint/suspicious/noArrayIndexKey: stop complaining...
                  key={index}
                >
                  <div className="h-full p-1">
                    <TestimonialsCard
                      avatarUrl={testimonial.avatarUrl}
                      name={testimonial.name}
                      position={testimonial.position}
                      testimonial={testimonial.testimonial}
                      title={testimonial.title}
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
