import { Separator } from "@/components/ui/separator";

import { Hero } from "./_components/hero";
import { Achievements } from "./_components/achievements";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <Separator className="mt-10" />
      </div>
      <Achievements />
      <div className="container mx-auto flex items-center justify-between">
        <Separator className="h-2 w-[15%] bg-blue-600 rounded-md" />
        <Separator className="h-2 w-[15%] bg-blue-600 rounded-md" />
      </div>
      <Testimonials />
    </div>
  );
}
