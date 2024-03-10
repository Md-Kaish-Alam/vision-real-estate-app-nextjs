import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ContactForm } from "./contact-form";

export const ContactDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="text-white bg-blue-600 py-2 px-6 rounded-lg">
        Contact Us
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg px-4">
          <DrawerHeader>
            <DrawerTitle className="text-center text-2xl font-bold text-blue-600">
              Contact With Us
            </DrawerTitle>
            <Separator />
            <DrawerDescription className="text-center">
              You can contact with us via Mail or Phone.
            </DrawerDescription>
            <div className="flex items-center justify-between p-1">
              <Link
                href="mailto:alamkaishg1511@gmail.com"
                className="text-muted-foreground text-sm"
              >
                alamkaishg1511@gmail.com
              </Link>
              <Link
                href="mailto:alamkaishg1511@gmail.com"
                className="text-muted-foreground text-sm"
              >
                +91 - 7061238198
              </Link>
            </div>
            <div className="text-center text-muted-foreground flex items-center justify-between gap-1">
              <Separator className="w-[40%]" />
              <p>or</p>
              <Separator className="w-[40%]" />
            </div>
          </DrawerHeader>
          <ContactForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
