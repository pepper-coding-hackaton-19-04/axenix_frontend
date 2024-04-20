'use client'
// const data = [
//     { longitude: 47.15389021, latitude: 39.73343477, label: 'Клиент 1', text: 'Клиент 1', id: '1' },
//     { longitude: 47.27843879, latitude: 39.66504917, label: 'Клиент 1', text: 'Клиент 1', id: '2' },
//     { longitude: 47.27908131, latitude: 39.8532115, label: 'Клиент 1', text: 'Клиент 1', id: '3' },
//     { longitude: 47.23956633, latitude: 39.686936, label: 'Клиент 1', text: 'Клиент 1', id: ' 4' },
//     { longitude: 47.23876258, latitude: 39.72910032, label: 'Склад 1', text: 'Клиент 1', id: '5' },
//     { longitude: 47.26100013, latitude: 39.7189723, label: 'Склад 1', text: 'Клиент 1', id: '6 ' },
//     { longitude: 47.21593813, latitude: 39.67961893, label: 'Склад 1', text: 'Клиент 1', id: '7' },
//     { longitude: 47.2294162, latitude: 39.6284853, label: 'Склад 1', text: 'Клиент 1', id: '8' },
//     { longitude: 47.23343191, latitude: 39.75903914, label: 'Склад 1', text: 'Клиент 1', id: '9 ' },
//     { longitude: 47.25423635, latitude: 39.76570175, label: 'Склад 1', text: 'Клиент 1', id: '10' },
//     { longitude: 47.23600049, latitude: 39.59843919, label: 'Склад 1', text: 'Клиент 1', id: '11' },
//     { longitude: 47.29597385, latitude: 39.71406386, label: 'Склад 1', text: 'Клиент 1', id: '12' },
//     { longitude: 47.29408339, latitude: 39.70305607, label: 'Склад 1', text: 'Клиент 1', id: '13' },
//     { longitude: 47.26360024, latitude: 39.85908554, label: 'Склад 1', text: 'Клиент 1', id: '14' },
//     { longitude: 47.22374472, latitude: 39.72594068, label: 'Склад 1', text: 'Клиент 1', id: '15' },
//     { longitude: 47.28950657, latitude: 39.71387074, label: 'Склад 1', text: 'Клиент 1', id: '16' },
//     { longitude: 47.28401677, latitude: 39.7063391, label: 'Склад 1', text: 'Клиент 1', id: '17' },
//     { longitude: 47.28298007, latitude: 39.71715376, label: 'Склад 1', text: 'Клиент 1', id: '18' },
//     { longitude: 47.26878544, latitude: 39.88010333, label: 'Склад 1', text: 'Клиент 1', id: '19' },
//     { longitude: 47.23348307, latitude: 39.71436963, label: 'Склад 1', text: 'Клиент 1', id: '20' },
//     { longitude: 47.22882423, latitude: 39.69366298, label: 'Склад 1', text: 'Клиент 1', id: '21' },
//     { longitude: 47.23015798, latitude: 39.68220458, label: 'Склад 1', text: 'Клиент 1', id: '22' },
//     { longitude: 47.27205698, latitude: 39.75013421, label: 'Склад 1', text: 'Клиент 1', id: '23' },
// ]

import React, {useState} from "react";

const MapPage = () => {
    const [search, setSearch] = useState('')
    const [searchFilter, setSearchFilter] = useState('')
    const [toggler, setToggler] = useState(false)

    const FILTERS = [ //fetch it or set as const
        {
            title: 'option1',
            value: 'val1',
        },
        {
            title: 'option2',
            value: 'val2',
        },
        {
            title: 'option3',
            value: 'val3',
        },
        {
            title: 'option4',
            value: 'val4',
        },
    ]
    return (
        <div className='p-6'>
            <h1 className='text-4xl font-semibold'>
                Карта
            </h1>
            <div className='flex items-center gap-20 flex-wrap mt-5'>
                <form className="max-w-sm">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Фильтры-селектор
                    </label>
                    <select
                        value={searchFilter}
                        onChange={(e)=>setSearchFilter(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        {FILTERS.map((filter)=>{
                            return(
                                <option value={`${filter.value}`}>{filter.title}</option>
                            )
                        })}
                    </select>
                </form>
                <div className="h-full flex items-end">
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={toggler} onChange={(e)=>setToggler(e.target.checked)} className="sr-only peer"/>
                        <div
                            className="relative w-11 h-6 bg-[#e5e7eb] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-[#374151] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#fff] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2563eb]"></div>
                        <span className="ms-3 text-sm font-medium text-[#4b5563]">Toggle me</span>
                    </label>
                </div>
            </div>
            <div className='my-10 flex flex-col justify-center items-center'>
            {/*    add component MAP instead image and connect via states & selectors*/}
                <img src="https://t4.ftcdn.net/jpg/05/06/71/49/360_F_506714946_V47nHgpaFVynocuDiA3YMpTxbZ1uxtme.jpg" alt="" className='w-full h-32 lg:h-[36rem] rounded-md'/>
                <div className="relative my-3 border rounded-md flex w-60 lg:w-96">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4 gap-2">
                            <button type="submit" className="p-2 focus:outline-none focus:ring">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                    <input
                        type="search"
                        name="Search"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Search..."
                        className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none text-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default MapPage
