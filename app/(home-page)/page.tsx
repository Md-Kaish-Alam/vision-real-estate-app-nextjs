import { Achievements } from "@/components/achievements";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}
