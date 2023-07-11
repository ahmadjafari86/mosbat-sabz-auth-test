import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppBar from "@/components/AppBar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mosbat-Sabz Auth',
  description: 'ahmad.j examination task',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
