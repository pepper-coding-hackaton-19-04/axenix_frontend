'use client'
import { Directions } from '@2gis/mapgl-directions'
import { load } from '@2gis/mapgl'
import { Map, Marker } from '@2gis/mapgl/types'
import type { NextPage } from 'next'
import { memo, useEffect, useRef } from 'react'

const data = [
    { longitude: 47.15389021, latitude: 39.73343477, label: 'Клиент 1', text: 'Клиент 1', id: '1' },
    { longitude: 47.27843879, latitude: 39.66504917, label: 'Клиент 1', text: 'Клиент 1', id: '2' },
    { longitude: 47.27908131, latitude: 39.8532115, label: 'Клиент 1', text: 'Клиент 1', id: '3' },
    { longitude: 47.23956633, latitude: 39.686936, label: 'Клиент 1', text: 'Клиент 1', id: ' 4' },
    { longitude: 47.23876258, latitude: 39.72910032, label: 'Склад 1', text: 'Клиент 1', id: '5' },
    { longitude: 47.26100013, latitude: 39.7189723, label: 'Склад 1', text: 'Клиент 1', id: '6 ' },
    { longitude: 47.21593813, latitude: 39.67961893, label: 'Склад 1', text: 'Клиент 1', id: '7' },
    { longitude: 47.2294162, latitude: 39.6284853, label: 'Склад 1', text: 'Клиент 1', id: '8' },
    { longitude: 47.23343191, latitude: 39.75903914, label: 'Склад 1', text: 'Клиент 1', id: '9 ' },
    { longitude: 47.25423635, latitude: 39.76570175, label: 'Склад 1', text: 'Клиент 1', id: '10' },
    { longitude: 47.23600049, latitude: 39.59843919, label: 'Склад 1', text: 'Клиент 1', id: '11' },
    { longitude: 47.29597385, latitude: 39.71406386, label: 'Склад 1', text: 'Клиент 1', id: '12' },
    { longitude: 47.29408339, latitude: 39.70305607, label: 'Склад 1', text: 'Клиент 1', id: '13' },
    { longitude: 47.26360024, latitude: 39.85908554, label: 'Склад 1', text: 'Клиент 1', id: '14' },
    { longitude: 47.22374472, latitude: 39.72594068, label: 'Склад 1', text: 'Клиент 1', id: '15' },
    { longitude: 47.28950657, latitude: 39.71387074, label: 'Склад 1', text: 'Клиент 1', id: '16' },
    { longitude: 47.28401677, latitude: 39.7063391, label: 'Склад 1', text: 'Клиент 1', id: '17' },
    { longitude: 47.28298007, latitude: 39.71715376, label: 'Склад 1', text: 'Клиент 1', id: '18' },
    { longitude: 47.26878544, latitude: 39.88010333, label: 'Склад 1', text: 'Клиент 1', id: '19' },
    { longitude: 47.23348307, latitude: 39.71436963, label: 'Склад 1', text: 'Клиент 1', id: '20' },
    { longitude: 47.22882423, latitude: 39.69366298, label: 'Склад 1', text: 'Клиент 1', id: '21' },
    { longitude: 47.23015798, latitude: 39.68220458, label: 'Склад 1', text: 'Клиент 1', id: '22' },
    { longitude: 47.27205698, latitude: 39.75013421, label: 'Склад 1', text: 'Клиент 1', id: '23' },
]

// eslint-disable-next-line react/display-name
const MapWrapper = memo(
    () => {
        return <div id="map-container" className="h-full w-full"></div>
    },
    () => true
)

const Home: NextPage = () => {
    const resetButton = useRef<null | HTMLButtonElement>(null)

    useEffect(() => {
        let map: Map
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [39.810833, 47.240556],
                zoom: 13,
                key: process.env.NEXT_PUBLIC_2GIS_MAPS_KEY,
            })

            const directions = new Directions(map, {
                directionsApiKey: '5741e43a-a264-4902-bd0b-945dcf1f4b14',
            })

            const markers: Marker[] = []

            let firstPoint: undefined | number[]
            let secondPoint: undefined | number[]
            // A current selecting point
            let selecting = 'a'

            const controlsHtml = `<button id="reset">Reset points</button> `
            new mapglAPI.Control(map, controlsHtml, {
                position: 'topLeft',
            })

            resetButton.current?.addEventListener('click', function () {
                selecting = 'a'
                firstPoint = undefined
                secondPoint = undefined
                directions.clear()
            })

            map.on('click', (e) => {
                const coords = e.lngLat

                if (selecting != 'end') {
                    // Just to visualize selected points, before the route is done
                    markers.push(
                        new mapglAPI.Marker(map, {
                            coordinates: coords,
                            icon: 'https://docs.2gis.com/img/dotMarker.svg',
                        })
                    )
                }

                if (selecting === 'a') {
                    firstPoint = coords
                    selecting = 'b'
                } else if (selecting === 'b') {
                    secondPoint = coords
                    selecting = 'end'
                }

                // If all points are selected — we can draw the route
                if (firstPoint && secondPoint) {
                    directions.carRoute({
                        points: [firstPoint, secondPoint],
                    })
                    markers.forEach((m) => {
                        m.destroy()
                    })
                }
            })

            data.map(({ latitude, longitude }) => new mapglAPI.Marker(map, { coordinates: [latitude, longitude] }))
        })

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy()
    }, [])

    return (
        <div>
            <button ref={resetButton}>Reset</button>
            <MapWrapper />
        </div>
    )
}

export default Home
