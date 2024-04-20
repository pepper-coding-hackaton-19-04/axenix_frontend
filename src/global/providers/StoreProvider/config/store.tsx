import { Reducer, ReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit'
import { UserReducer } from '@/entities/User'
import { rtkApi } from '@/shared/api/rtkApi'
import { ProductReducer } from '@/entities/Products'
import { SalesReducer } from '@/entities/Sales'

export const createReduxStore = () => {
    const rootReducers = combineReducers({
        user: UserReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        product: ProductReducer,
        sales: SalesReducer,
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
