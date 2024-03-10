"use client"

import { MobileMenu } from "./mobile-menu";

export const MobileNav = () => {
  return (
    <div className="mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold text-blue-600">Vision</h1>
      <MobileMenu />
    </div>
  );
};
