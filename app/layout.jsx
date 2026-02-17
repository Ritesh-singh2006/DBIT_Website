import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Don Bosco Institute of Technology | Mumbai',
  description:
    'DBIT Mumbai - Premier Engineering College offering Computer, IT, EXTC, and Mechanical Engineering programs with excellent placements and industry partnerships.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
