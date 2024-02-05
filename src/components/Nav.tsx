"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
  return (
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
  );
}
