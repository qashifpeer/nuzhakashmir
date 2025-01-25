import type { Metadata } from 'next'
import { GoogleTagManager } from "@next/third-parties/google";


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
       <GoogleTagManager gtmId="GTM-TDFZXWPT" />
      <body className=''>
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDFZXWPT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
