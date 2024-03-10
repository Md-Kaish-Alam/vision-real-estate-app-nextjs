"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes } from "@/constants/data";

import { ContactDrawer } from "./contact-drawer";

export const DesktopNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="container mx-auto flex items-center justify-between">
      <h1 className="text-3xl font-bold text-blue-600 tracking-wider">
        Vision
      </h1>
      <ul className="flex items-center justify-center gap-6">
        {routes.map((route) => (
          <li
            key={route.id}
            className={cn(
              "font-semibold hover:text-blue-900 hover:underline hover:underline-offset-8",
              pathname === route.url &&
                "text-blue-900 underline underline-offset-8"
            )}
          >
            <Link href={route.url}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <ContactDrawer />
    </div>
  );
};
