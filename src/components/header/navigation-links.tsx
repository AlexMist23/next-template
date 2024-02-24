"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavigationLinks({ classname }: { classname?: string }) {
  const pathname = usePathname()
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ]
  return (
    <ul className="flex gap-4">
      {navItems.map((item) => (
        <li key={item.label} className="m-auto">
          <Link
            href={item.path}
            className={`hover:text-foreground ${
              pathname === item.path
                ? "text-accent-foreground"
                : "text-muted-foreground tranition ease-in-out hover:text-foreground duration-100 "
            } `}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
