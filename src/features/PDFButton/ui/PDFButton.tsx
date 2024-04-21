'use client'
import { ButtonUI, HStack, SpanUI, VStack } from '@/shared/ui'
import { FC } from 'react'

interface PDFButtonProps {
    places: { longitude: number; latitude: number; label: string; text: string; id: string }[]
}

export const PDFButton: FC<PDFButtonProps> = ({ places }) => {
    const handlePrint = async () => {
        const html2pdf = (await import('html2pdf.js/dist/html2pdf.min.js')).default
        const ReactDOMServer = (await import('react-dom/server')).default
        const random = (Math.random() * 100000).toFixed(0)
        const content = (
            <div className="grid grid-cols-1 gap-2 m-5">
                <div className="grid grid-cols-5 gap-2 justify-center">
                    <SpanUI className="text-center">Номер в маршруте</SpanUI>
                    <SpanUI className="text-center">ID в системе</SpanUI>
                    <SpanUI className="text-center">Широта</SpanUI>
                    <SpanUI className="text-center">Долгота</SpanUI>
                    <SpanUI className="text-center">Адрес</SpanUI>
                </div>
                {places.map((place, i) => (
                    <div className="grid grid-cols-5 gap-2" key={place.id}>
                        <SpanUI className="text-center">{i + 1}</SpanUI>
                        <SpanUI className="text-center">{place.id}</SpanUI>
                        <SpanUI className="text-center">{place.latitude}</SpanUI>
                        <SpanUI className="text-center">{place.longitude}</SpanUI>
                        <SpanUI className="text-center">{place.text}</SpanUI>
                    </div>
                ))}
            </div>
        )
        const printContent = ReactDOMServer.renderToString(content)
        html2pdf()
            .set({
                filename: `Накладнойл лист-${random}`,
                margin: 2,
                image: { type: 'jpeg' },
                jsPDF: { format: 'a4', orientation: 'p' },
                // html2canvas: { scele: 75 },
            })
            .from(printContent)
            .save()
    }

    return (
        <ButtonUI textStyle="medium" onClick={handlePrint}>
            Печать накладного листа
        </ButtonUI>
    )
}
