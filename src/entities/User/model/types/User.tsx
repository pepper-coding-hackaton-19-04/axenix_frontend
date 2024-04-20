export interface User {
    id: string

    // rest data
    roles: UserRoles
}

export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user',
}
