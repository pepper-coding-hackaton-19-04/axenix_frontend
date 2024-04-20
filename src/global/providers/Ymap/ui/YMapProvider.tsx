'use client'
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import Script from 'next/script'
import { useYMapProviderAction, YMapProviderReducer } from '../model/slice/YMapSlice'

export const YMapProvider: FC<{
    children?: React.ReactNode
    apiUrl: string
}> = (props) => {
    const { setReactifyApi, setIsOpen } = useYMapProviderAction()
    return (
        <>
            <Script
                defer
                src={props.apiUrl}
                onLoad={async () => {
                    const [ymaps3React] = await Promise.all([ymaps3.import('@yandex/ymaps3-reactify')])
                    const reactify = ymaps3React.reactify.bindTo(React, ReactDOM)
                    console.log(reactify.module(ymaps3))
                    setIsOpen(true)
                    setReactifyApi(reactify.module(ymaps3))
                }}
            />
            {props.children}
        </>
    )
}
