import { ClerkProvider, UserButton } from '@clerk/nextjs'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: "DevFlow",
  description: "Acommunity- driven platform for asking and answering programming question. Get help, share knowledge, and collaborate with developers form around the world.",
  icons: {
    icon: "/assets/images/site-logo.svg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimarey: 'primary-gradiant',
        footerActionLink: 'primary-text-gradiant hover:text-primary-500',
      }
    }}>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <UserButton />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}