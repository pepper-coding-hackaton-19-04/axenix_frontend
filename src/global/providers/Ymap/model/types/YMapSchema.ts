import { ReactifiedModule } from '@yandex/ymaps3-types/reactify'

export type ReactifyApi = ReactifiedModule<typeof import('@yandex/ymaps3-types')>

export interface YMapSchema {
    is_open: boolean
    reactifyApi: ReactifyApi | null
}