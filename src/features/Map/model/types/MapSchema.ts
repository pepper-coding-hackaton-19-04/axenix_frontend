import { LngLatBounds } from "@yandex/ymaps3-types"

export interface MapSchema {
    selectedPlaceId: string | null
    bounds: LngLatBounds
}