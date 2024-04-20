export interface UserSchema {
    userData: null | User
}

export interface User {
    id: string;
    role: string;
    login: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}
