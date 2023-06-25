import { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/store/provider'


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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}


