import { buildSlice } from '@/shared/lib/store/buildSlice'
import { MapSchema } from '../types/MapSchema'
import { PayloadAction } from '@reduxjs/toolkit'
import { LngLatBounds } from '@yandex/ymaps3-types'

const initialState: MapSchema = {
    selectedPlaceId: null,
    bounds: [
        [0, 0],
        [0, 0],
    ],
}

const MapSlice = buildSlice({
    name: 'map',
    initialState,
    reducers: {
        setBounds: (store, action: PayloadAction<LngLatBounds>) => {
            store.bounds = action.payload
        },
        selectPlace: (store, action: PayloadAction<string | null>) => {
            store.selectedPlaceId = action.payload
        },
    },
})

export const { reducer: MapReducer, useActions: useMapActions } = MapSlice
