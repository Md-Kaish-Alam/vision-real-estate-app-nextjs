import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { faker } from "@faker-js/faker";

interface Props {
  item: {
    name: string;
    address: string;
    message: string;
  };
}

export const TestimonialCard = ({ item }: Props) => {
  return (
    <Card>
      <CardContent className="flex flex-col aspect-square items-center justify-start gap-2 p-6">
        <Avatar className="w-16 h-16 border">
          <AvatarImage src={faker.image.avatar()} alt="client-image" />
          <AvatarFallback>{item.name.charAt(1)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
          <CardDescription className="text-blue-600">
            {item.address}
          </CardDescription>
        </div>
        <div className="mt-6 flex flex-col items-center justify-start gap-6">
          <p className="text-sm text-muted-foreground">{item.message}</p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star className="h-6 w-6 text-orange-500 fill-orange-500" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
