import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.po2vision.com"),
  title: {
    default: "Dr Matt's Optical Outlet | Experience Matters. Price Matters.",
    template: "%s | Dr Matt's Optical Outlet",
  },
  description:
    "Locally owned eye care in Waverly, Iowa. Comprehensive eye exams, contact lenses, and eyewear from doctors with over 30 years of experience. 1300 10th Avenue SW, Suite A.",
  keywords: ["optometry", "eye care", "Waverly IA", "eye exam", "contact lenses", "eyewear", "vision care"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.po2vision.com",
    siteName: "Dr Matt's Optical Outlet",
    title: "Dr Matt's Optical Outlet | Experience Matters. Price Matters.",
    description: "Same experienced care, same trusted location—now with lower prices.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dr Matt's Optical Outlet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Matt's Optical Outlet | Experience Matters. Price Matters.",
    description: "Same experienced care, same trusted location—now with lower prices.",
    images: ["/logo.png"],
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
