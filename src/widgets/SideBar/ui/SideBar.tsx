import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { auth } from '@/shared/lib/auth'
import { SignOut } from '@/entities/Auth/ui/SignOut'
import { SignIn } from '@/entities/Auth/ui/SignIn'
import { SpanUI } from '@/shared/ui'

const sideBarConfig: { Icon: ReactNode; text: string; href: string }[] = [
    {
        href: '/',
        text: 'Home',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        ),
    },
    {
        href: '/dashboard',
        text: 'Dashboard',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
            </svg>
        ),
    },
    {
        href: '/map',
        text: 'Map',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
    {
        href: '/settings',
        text: 'Settings',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
]

export async function Sidebar() {
    // const [open, setOpen] = useState(false)
    const sessionData = await auth()
    return (
        <div className="flex-row height-100%">
            <div className={`lg:w-40 flex flex-col lg:h-screen p-3 w-full bg-x-orange shadow duration-300`}>
                <div className="space-y-3">
                    <div className="flex items-center justify-center pt-4 pb-4">
                        <Logo />
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4 gap-2">
                            <button type="submit" className="p-2 focus:outline-none focus:ring">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none text-center"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm flex flex-col gap-1 items-center">
                            {sideBarConfig.map((item) => (
                                <li key={item.href} className="rounded-sm">
                                    <Link href={item.href} className="flex items-center p-2 space-x-3 rounded-md">
                                        {item.Icon}
                                        <SpanUI className="text-x-white">{item.text}</SpanUI>
                                    </Link>
                                </li>
                            ))}
                            <li className="rounded-sm">{sessionData ? <SignOut /> : <SignIn />}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}