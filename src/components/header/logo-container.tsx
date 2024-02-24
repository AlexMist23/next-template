import Link from "next/link"
import VercelLogo from "../icons/vercel-logo-icon"

interface LogoContainerProps {
  className?: string
}

export default function LogoContainer({ className }: LogoContainerProps) {
  return (
    <Link href={""} className={className}>
      <VercelLogo className="m-auto w-6 h-full" />
      <p className="font-semibold m-auto">NexTemplate</p>
    </Link>
  )
}
