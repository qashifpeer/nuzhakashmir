import type { Metadata } from 'next'

import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'NuzhaKashmir',
  description: 'Explore Kashmir with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
