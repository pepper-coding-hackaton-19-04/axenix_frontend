import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

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
            {/* <AppProvider> */}
            <body className={monserrat.className}>{children}</body>
            {/* </AppProvider> */}
        </html>
    )
}
