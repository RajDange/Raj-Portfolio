import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Raj Portfolio',
  description: 'Portfolio of Raj Dange, Data Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
