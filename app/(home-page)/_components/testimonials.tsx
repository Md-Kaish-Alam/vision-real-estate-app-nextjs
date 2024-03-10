import { testimonialsdata } from "@/constants/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TestimonialCard } from "./testimonial-card";

export const Testimonials = () => {
  return (
    <div className="container mx-auto text-center my-8 flex flex-1 flex-col gap-6 items-center">
      <div className="flex flex-col items-center gap-2 mb-4">
        <span className="text-3xl font-bold">Vision's</span>
        <span className="text-5xl font-bold text-blue-600 capitalize">
          happy clients
        </span>
      </div>
      <div className="container mx-auto">
        <Carousel opts={{ align: "center" }} className="w-full mb-10">
          <CarouselContent>
            {testimonialsdata.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
