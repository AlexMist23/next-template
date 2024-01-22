"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/navigation";

import { ModeToggle } from "./themeToggleButton";
import Logo from "@/icons/logo";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <header className="container flex h-12 max-w-screen-2xl items-center border-b-2 border-muted">
      <div className="hidden md:flex justify-start gap-6">
        <div className="flex gap-2">
          <Logo className="h-6 w-6 fill-foreground" />
          <p className="font-semibold">NexTemplate</p>
        </div>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={`hover:text-foreground ${
                pathname === item.path
                  ? "text-accent-foreground"
                  : "text-muted-foreground tranition ease-in-out hover:text-white duration-150 "
              } `}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
