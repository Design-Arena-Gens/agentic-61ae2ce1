import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adcraze - Performance-Driven Digital Advertising',
  description: 'Performance-based advertising that scales your revenue—not your costs. We only win when you win.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
