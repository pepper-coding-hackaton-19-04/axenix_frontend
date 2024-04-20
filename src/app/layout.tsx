import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/widgets/SideBar'
import { USER_ACCESS_TOKEN } from '@/shared/consts/localStorage'
import { redirect } from 'next/navigation'
// import { AppProvider } from '@/global/providers/AppProvider'

const monserrat = Montserrat({ subsets: ['cyrillic', 'latin'], variable: '--montserrat' })

export const metadata: Metadata = {
    title: 'Pepper CRM',
    description: 'The best CRM ON ZAWARUDO',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            {/* <AppProvider> */}
            <body className={monserrat.className + ' grid grid-cols-[1fr_6fr]'}>
                <Sidebar />
                {children}
            </body>
            {/* </AppProvider> */}
        </html>
    )
}
