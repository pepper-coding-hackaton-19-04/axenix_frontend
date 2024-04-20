import { User, UserRoles } from '@/entities/User/model/types/User'
import { auth } from '@/shared/lib/auth'
import { CardUI, Page } from '@/shared/ui'
import { redirect } from 'next/navigation'
import React from 'react'

const ClientsDashboard = async () => {
    return (
        <Page>
            <CardUI></CardUI>
        </Page>
    )
}

export default ClientsDashboard
