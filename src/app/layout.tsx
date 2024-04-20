import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/widgets/SideBar'

const monserrat = Montserrat({ subsets: ['cyrillic', 'latin'], variable: '--montserrat' })

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
            <body className={monserrat.className + ' grid grid-cols-[1fr_5fr]'}>
                <Sidebar />
                {children}
            </body>
        </html>
    )
}
