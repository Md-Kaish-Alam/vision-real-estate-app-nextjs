import { testimonialsdata } from "@/constants/data";
import { TestimonialCard } from "./testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const Testimonials = () => {
  return (
    <div className="container mx-auto text-center my-8 flex flex-1 flex-col gap-4 items-center">
      <h1 className="text-5xl font-bold text-blue-600">What People</h1>
      <h1 className="text-3xl font-bold">
        are saying about <span className="text-blue-600">Vision</span>....
      </h1>
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
