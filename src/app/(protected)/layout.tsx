import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Sidebar } from '@/widgets/SideBar'
import { USER_ACCESS_TOKEN } from '@/shared/consts/localStorage'
import { redirect } from 'next/navigation'

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
    // const token = localStorage.getItem(USER_ACCESS_TOKEN)
    // if (token) {
    //     const data = await fetch(process.env.API + '/user/profile', { headers: { Authorization: `Bearer ${token}` } })
    //     const user = await data.json()
    //     if (!user) {
    //         return redirect('/')
    //     }
    // }
    //
    // if (!token) {
    //     return redirect('/')
    // }
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
