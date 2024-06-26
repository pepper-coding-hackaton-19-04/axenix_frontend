'use client'
import { YMapProvider } from '@/global/providers/Ymap'
import { MapWrapper } from './MapWrapper'
import { Place } from '../model/types/Place'
import { useAppSelector } from '@/shared/lib/hooks'

const data: Place[] = [
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

export const Map = () => {
    const apiUrl = `https://api-maps.yandex.ru/3.0/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`

    return (
        <YMapProvider apiUrl={apiUrl}>
            <MapWrapper places={data} />
        </YMapProvider>
    )
}

// useEffect(() => {
//     ymaps3.ready
//         .then(() => {
//             const mapInstance = new ymaps3.YMap(ref.current!, {
//                 location: {
//                     center: [47.15389021, 39.73343477], // Координаты Москвы
//                     zoom: 10, // Уровень зума
//                 },
//             })
//             mapInstance
//                 .addChild(new ymaps3.YMapDefaultSchemeLayer({}))
//                 .addChild(new ymaps3.YMapDefaultFeaturesLayer({}))

//             data.forEach(({ x, y, name }) => {
//                 const markerElement = document.createElement('img')
//                 markerElement.className = 'icon-marker'
//                 markerElement.src =
//                     'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/yellow-capybara.png'
//                 markerElement.onclick = () => alert(name)
//                 const marker = new ymaps3.YMapMarker(
//                     {
//                         coordinates: [y, x],
//                         source: 'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/yellow-capybara.png',
//                     },
//                     markerElement
//                 )
//                 mapInstance.addChild(marker)
//             })
//         })
//         .catch((e) => console.log(e))
// ymaps3.ready(() => {

// data.forEach((point) => {
//     const marker = new ymaps3.YMapDefaultMarker([point.y, point.x], {
//         iconLayout: 'default#icon',
//         iconOffset: [-24, -24],
//         hintContent: point.name,
//     })
//     marker.properties.id = point.id
//     marker.properties.type = point.type
//     mapInstance.geoObjects.add(marker)
// })
// })
// }, [])
