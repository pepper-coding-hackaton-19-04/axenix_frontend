import { UserSchema } from '../types/UserSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'

const initialState: UserSchema = {}

const UserSlice = buildSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export const { reducer: UserReducer, useActions: useUserActions } = UserSlice
