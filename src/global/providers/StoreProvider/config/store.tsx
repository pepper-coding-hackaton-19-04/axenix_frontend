import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { UserReducer } from '@/entities/User'
import { createReducerManager } from './reducerManager'
import { rtkApi } from '@/shared/api/rtkApi'
// import { NavigateOptions, To } from 'react-router-dom'

export const createReduxStore = (
    initaialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
    // nav?: (to: To, options?: NavigateOptions) => void
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: UserReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        devTools: true,
        preloadedState: initaialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(rtkApi.middleware),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
