import { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Submission Form | User Profile',
  description: 'enter your data in form',
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
