import { buildSlice } from '@/shared/lib/store/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { ReactifyApi, YMapSchema } from '../types/YMapSchema'

const initialState: YMapSchema = {
    is_open: false,
    reactifyApi: null,
}

const YMapSlice = buildSlice({
    name: 'map-provider',
    initialState,
    reducers: {
        setIsOpen: (store, action: PayloadAction<boolean>) => {
            store.is_open = action.payload
        },

        setReactifyApi: (store, action: PayloadAction<ReactifyApi>) => {
            store.reactifyApi = action.payload
        },
    },
})

export const { reducer: YMapProviderReducer, useActions: useYMapProviderAction } = YMapSlice
