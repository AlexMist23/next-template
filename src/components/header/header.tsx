import { ModeToggle } from "@/components/header/theme-toggle-button"
import UserButton from "@/components/header/user-button"
import NavigationLinks from "@/components/header/navigation-links"
import LogoContainer from "./logo-container"

export default function Header() {
  return (
    <header className="w-full flex justify-between h-12 max-w-screen-2xl items-center border-b-2 border-muted px-2 gap-4">
      <div className="flex gap-4">
        <LogoContainer className="flex justify-center gap-1" />
        <NavigationLinks />
      </div>
      <div className="flex gap-1">
        <ModeToggle />
        <UserButton />
      </div>
    </header>
  )
}
