import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <div className="bg-white h-16 fixed top-0 w-full shadow-md mx-auto px-6 py-3 z-[9999]">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};
