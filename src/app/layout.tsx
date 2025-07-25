import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Meu site Next.js',
  description: 'Site feito com Next.js',
  keywords: ['Html', 'CSS', 'JavaScript', 'Programação'],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true,
    }
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />

        {children}
      </body>
    </html>
  )
}
