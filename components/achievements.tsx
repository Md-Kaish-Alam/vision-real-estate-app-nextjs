import { achievementsScore } from "@/constants/data";
import { ScoreCard } from "./score-card";
import { Separator } from "./ui/separator";

export const Achievements = () => {
  return (
    <div className="my-20 px-4">
      <div className="container mx-auto flex flex-col gap-4">
        <h1 className="text-center text-5xl font-bold">Our Achievements</h1>
        <div className="flex items-center justify-center">
          <Separator className="bg-blue-600 w-24 h-2 rounded-md" />
        </div>
        <p className="text-center md:text-lg text-sm">
          We take pride in our journey of transforming visions into tangible
          realities. Our commitment to excellence, innovation, and customer
          satisfaction has been recognized and celebrated through various
          accolades and milestones. Here's a glimpse into some of our
          achievements that fuel our passion to build dream homes.
        </p>
      </div>
      <div className="container mx-auto bg-white shadow-xl rounded-xl md:mt-4 mt-8 flex items-center justify-between px-6 md:px-12 py-4 md:py-8">
        {achievementsScore.map((item, index) => (
          <ScoreCard title={item.title} score={item.score} />
        ))}
      </div>
    </div>
  );
};
