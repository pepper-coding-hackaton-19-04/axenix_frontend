import { buildSlice } from '@/shared/lib/store/buildSlice'
import { ProductSchema } from '../types/ProductSchema'

const initialState: ProductSchema = {}

const ProductSlice = buildSlice({
    name: 'product',
    initialState,
    reducers: {},
})

export const { useActions: useProductActions, reducer: ProductReducer } = ProductSlice
