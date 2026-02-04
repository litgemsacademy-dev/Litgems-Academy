import React from "react"
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'LitGems Academy | Online Math Tutoring for Grades 1-12',
  description: 'One-on-one online tutoring designed to build confidence and strong academic foundations. Personalized Math tutoring for students from Grade 1 to Grade 12.',
  keywords: ['tutoring', 'online tutoring', 'math tutoring', 'one-on-one tutoring', 'academic support', 'homework help'],
    generator: 'v0.app'
}

export const viewport = {
  themeColor: '#5B2D8B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
