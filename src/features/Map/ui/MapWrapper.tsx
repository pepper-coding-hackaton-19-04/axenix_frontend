'use client'

import { YMap, YMapLocationRequest } from '@yandex/ymaps3-types/imperative/YMap'
import React, { useMemo, useRef, useState } from 'react'
import Loading from '@/app/loading'
import { useAppSelector } from '@/shared/lib/hooks'
import { Place } from '../model/types/Place'
import { getBboxByCoordinates } from '../model/utils/getBboxByCoords'
import { useMapActions } from '../model/slice/MapSlice'
import { MarkerWithPopup } from './components/ModalMarker'

interface MapProps {
    places: Place[]
}

export const MapWrapper = ({ places }: MapProps) => {
    const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null)
    const { selectedPlaceId } = useAppSelector((state) => state.map!)
    const { reactifyApi, is_open } = useAppSelector((state) => state.mapProvider)
    const { selectPlace } = useMapActions()
    const startBounds = getBboxByCoordinates(places.map((place) => [place.longitude, place.latitude]))
    const [location] = useState<YMapLocationRequest>(startBounds ? { bounds: startBounds } : { zoom: 0 })
    console.log(reactifyApi)

    if (!reactifyApi?.YMap) return <Loading />

    const { YMap, YMapListener, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = reactifyApi

    return (
        <YMap margin={[20, 20, 20, 20]} location={location} ref={mapRef}>
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />

            <YMapListener
                onUpdate={({ location }) => {
                    location.bounds
                }}
            />

            {places.map((place) => (
                <MarkerWithPopup
                    key={place.id}
                    place={place}
                    mapRef={mapRef}
                    reactifyApi={reactifyApi}
                    selected={selectedPlaceId === place.id}
                    selectPlace={selectPlace}
                />
            ))}
        </YMap>
    )
}
