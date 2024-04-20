import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export const Map = () => {
    const mapRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '',
                version: 'weekly',
            })

            const { Map } = await loader.importLibrary('maps')
            const position = {
                lat: 43.4762482,
                lng: -79.38737203,
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MAP_ID',
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
        }

        initMap()
    }, [])

    return <div style={{ height: '100%' }} ref={mapRef} />
}
