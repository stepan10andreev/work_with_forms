import { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Submission Form | User Profile',
  description: 'Введите свои данные',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
