import { ClerkProvider, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <UserButton />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}