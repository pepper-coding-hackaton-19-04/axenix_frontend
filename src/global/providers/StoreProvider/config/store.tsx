'use client'
import { Reducer, ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit'
import { UserReducer } from '@/entities/User'
import { rtkApi } from '@/shared/api/rtkApi'
import { MapReducer } from '@/features/Map/model/slice/MapSlice'
import { YMapProviderReducer } from '../../Ymap/model/slice/YMapSlice'

export const createReduxStore = () => {
    const rootReducers = combineReducers({
        user: UserReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        map: MapReducer,
        mapProvider: YMapProviderReducer,
    })

    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(rtkApi.middleware),
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>
