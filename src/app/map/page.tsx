'use client'
import { useLoadScript, GoogleMap, MarkerF, CircleF } from '@react-google-maps/api'
import type { NextPage } from 'next'
import { useMemo, useState } from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'

const Home: NextPage = () => {
    const [lat, setLat] = useState(47.27843879)
    const [lng, setLng] = useState(39.66504917)

    const libraries = useMemo(() => ['places'], [])
    const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng])

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false,
        }),
        []
    )

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
        version: 'v=3.56',
    })

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    const markersData = [
      { name: 'Склад 1', position: { lat: 47.15389021, lng: 39.73343477 } },
      { name: 'Склад 2', position: { lat: 47.27843879, lng: 39.66504917 } },
      { name: 'Склад 3', position: { lat: 47.27908131, lng: 39.8532115 } },
      { name: 'Клиент 1', position: { lat: 47.23956633, lng: 39.686936 } },
    ]

    return (
      <div className={''}>
      <GoogleMap
          options={mapOptions}
          zoom={12}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          onLoad={(map) => console.log('Map Loaded')}
      >
          <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />

          {markersData.map((marker, idx) => (
              <MarkerF
                  key={idx}
                  position={marker.position}
                  onLoad={() => console.log(`Marker ${marker.name} Loaded`)}
              />
          ))}

          {[1000, 2500].map((radius, idx) => {
              return (
                  <CircleF
                      key={idx}
                      center={mapCenter}
                      radius={radius}
                      onLoad={() => console.log('Circle Load...')}
                      options={{
                          fillColor: radius > 1000 ? 'red' : 'green',
                          strokeColor: radius > 1000 ? 'red' : 'green',
                          strokeOpacity: 0.8,
                      }}
                  />
              )
          })}
      </GoogleMap>
  </div>
    )
}

export default Home