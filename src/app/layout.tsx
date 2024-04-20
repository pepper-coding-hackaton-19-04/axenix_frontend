import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { AppProvider } from '@/global/providers/AppProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pepper CRM',
    description: 'The best CRM ON ZAWARUDO',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppProvider>{children}</AppProvider>
                {/* <Script
                    strategy="beforeInteractive"
                    src="https://api-maps.yandex.ru/v3/?apikey=1bd32e77-3fe2-4537-87f0-73974d9762e7&lang=en_RU"
                ></Script> */}
            </body>
        </html>
    )
}
