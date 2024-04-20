import { User, UserRoles } from '@/entities/User/model/types/User'
import { auth } from '@/shared/lib/auth'
import { CardUI, Page } from '@/shared/ui'
import { redirect } from 'next/navigation'
import React from 'react'

const ClientsDashboard = async () => {
    const res = await fetch(process.env.API + '/user')
    const user: User = await res.json()

    if (user.roles !== UserRoles.ADMIN) {
        redirect('/not-found')
    }

    return (
        <Page>
            <CardUI></CardUI>
        </Page>
    )
}

export default ClientsDashboard
