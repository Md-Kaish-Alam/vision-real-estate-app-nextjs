import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full p-4 bg-blue-600">
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-center gap-6 text-md text-white/80">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </div>
        <div className="text-lg text-white/80">
          <span>© 2023 </span>
          <Link href="/">Vision™ </Link>
          <span>All Rights Reserved.</span>
        </div>
        <div className="flex items-center justify-center gap-6 text-white/80">
          <Link href="/">
            <Instagram />
          </Link>
          <Link href="/">
            <Facebook />
          </Link>
          <Link href="/">
            <Linkedin />
          </Link>
          <Link href="/">
            <Twitter />
          </Link>
        </div>
      </div>
    </div>
  );
};
