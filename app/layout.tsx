import type React from "react"
import type { Metadata } from "next"
import { ADLaM_Display as Clash_Display, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const clashDisplay = Clash_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-clash",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
})

export const metadata: Metadata = {
  title: "Video Editor & Motion Graphics Designer",
  description: "Cinematic portfolio showcasing video editing and motion graphics work",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} ${dmSans.variable} font-dm antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
