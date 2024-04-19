import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { UserSchema } from '@/entities/User'
import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
    user: UserSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Async reducers
    // **here**
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: Action) => Reducer<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedReducers: () => MountedReducer
}

export interface ThunkConfig<T = string> {
    rejectValue: T
    state: StateSchema
}
