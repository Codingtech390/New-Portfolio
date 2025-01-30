import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Doe | Full-Stack Developer',
  description: 'Professional portfolio of John Doe, a Full-Stack Developer specializing in modern web technologies.',
  openGraph: {
    title: 'John Doe | Full-Stack Developer',
    description: 'Professional portfolio of John Doe, a Full-Stack Developer specializing in modern web technologies.',
    url: 'https://johndoe.dev',
    siteName: 'John Doe Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        width: 1200,
        height: 630,
        alt: 'John Doe - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Full-Stack Developer',
    description: 'Professional portfolio of John Doe, a Full-Stack Developer specializing in modern web technologies.',
    images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}