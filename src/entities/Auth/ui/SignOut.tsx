import { signOut } from 'next-auth/react'

export function SignOut() {
    return (
        <form
            action={async () => {
                'use server'
                await signOut()
            }}
        >
            <button type="submit">Выйти</button>
        </form>
    )
}
