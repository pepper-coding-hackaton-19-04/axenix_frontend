import { AppDispatch } from '@/global/providers/StoreProvider/config/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
