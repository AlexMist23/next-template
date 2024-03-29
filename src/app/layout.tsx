import type { Metadata, Viewport } from "next"
import { Inter as FontSans } from "next/font/google"
import "@/styles/globals.css"
import Providers from "@/providers"
import { cn } from "@/lib/utils"
import Header from "@/components/header/header"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export const viewport: Viewport = {
  themeColor: "black",
}
/**
 * Renders the root layout of the application.
 * @param children - the content to render within the layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
