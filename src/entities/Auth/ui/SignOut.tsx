'use client'
import { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN } from '@/shared/consts/localStorage'
import { signOut } from '@/shared/lib/auth'
import { ButtonUI, SpanUI } from '@/shared/ui'
import { useRouter } from 'next/navigation'

export function SignButton() {
    const nav = useRouter()
    const login = () => nav.push('/login')
    const signout = async () => {
        localStorage.removeItem(USER_ACCESS_TOKEN)
        localStorage.removeItem(USER_REFRESH_TOKEN)
        await fetch(process.env.API + '/auth/signout')
    }

    return (
        <div className="flex p-1 hover:bg-[rgb(0,0,0,.1)] transition-all rounded-md">
            <button className="flex items-center gap-1">
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
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                </svg>
                <SpanUI className="text-x-white">Выйти</SpanUI>
            </button>
            {/*</ButtonUI>*/}
        </div>
    )
}
