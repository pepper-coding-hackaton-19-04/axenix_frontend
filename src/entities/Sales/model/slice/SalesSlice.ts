import { SaleSchema } from '../types/SalesSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'

const initialState: SaleSchema = {}

const SalesSlice = buildSlice({
    name: 'sales',
    initialState,
    reducers: {},
})

export const {reducer: SalesReducer, useActions: useSaleActions} = SalesSlice