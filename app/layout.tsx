import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "LumyOne - The B2B Gateway to Stellar DeFi",
  description:
    "Empower your business to offer secure DeFi payments, swaps, and escrows through a simple Telegram bot - no blockchain complexity required",
  generator: "v0.app",
  keywords: "DeFi, Stellar, B2B, Telegram bot, blockchain, payments, escrow",
  openGraph: {
    title: "LumyOne - The B2B Gateway to Stellar DeFi",
    description:
      "Empower your business to offer secure DeFi payments, swaps, and escrows through a simple Telegram bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LumyOne - The B2B Gateway to Stellar DeFi",
    description:
      "Empower your business to offer secure DeFi payments, swaps, and escrows through a simple Telegram bot",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${manrope.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
