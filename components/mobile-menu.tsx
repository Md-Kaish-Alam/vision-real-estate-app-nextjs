"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { routes } from "@/constants/data";
import { cn } from "@/lib/utils";

export const MobileMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="w-[calc(100%-40%)] z-[99999]">
        <ul className="pt-5 flex flex-col gap-4">
          {routes.map((route) => (
            <li
              key={route.id}
              className={cn(
                "text-md font-medium hover:text-blue-900 hover:underline hover:underline-offset-8",
                pathname === route.url &&
                  "text-blue-900 underline underline-offset-8"
              )}
            >
              <Link href={route.url}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
