import { buildSlice } from '@/shared/lib/store/buildSlice';
import { MapSchema } from '../types/MapSchema';

const initialState: MapSchema = {

}

const MapSlice = buildSlice({
  name: 'map',
  initialState,
  reducers: {}
});

export const {reducer: MapReducer, useActions: useMapActions} = MapSlice