import { FC, useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface MapProps {
    places: { ltd: number; lnt: number }[]
}

export const Map: FC<MapProps> = ({ places }) => {
    const mapRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '',
                version: 'quarterly',
            })

            const { Map } = await loader.importLibrary('maps')
            const { AdvancedMarkerElement, PinElement } = (await google.maps.importLibrary(
                'marker'
            )) as google.maps.MarkerLibrary
            const position = {
                lat: 43.4762482,
                lng: 8,
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MAP_ID',
            }
        }

        initMap()
    }, [])

    return <div id="MAP_ID" style={{ height: '100%' }} ref={mapRef} />
}
