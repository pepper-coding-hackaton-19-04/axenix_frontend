import { User, UserRoles } from '@/entities/User/model/types/User'
import { redirect } from 'next/navigation'
import React from 'react'

const WarehouseDashboard = async () => {
    const res = await fetch(process.env.API + '/user')
    const user: User = await res.json()

    if (user.roles !== UserRoles.ADMIN) {
        redirect('/not-found')
    }

    return <div>WarehouseDashboard</div>
}

export default WarehouseDashboard
