import { ModeToggle } from "./themeToggleButton";
import Logo from "@/icons/logo";
import UserButton from "./user-button";
import Nav from "@/components/nav";

export default function Header() {
  return (
    <header className="container flex h-12 max-w-screen-2xl items-center border-b-2 border-muted">
      <div className="hidden md:flex justify-start gap-6">
        <div className="flex gap-2">
          <Logo className="h-6 w-6 fill-foreground" />
          <p className="font-semibold">NexTemplate</p>
        </div>
        <Nav />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <ModeToggle />
        <UserButton />
      </div>
    </header>
  );
}
