import React, { useState, useEffect, useMemo } from 'react'
import Papa from 'papaparse';

interface Props {
    file: File
    onPickIndexes: (indexes: number[]) => void
    indexes: number[]
    onLoading?: (loading: boolean) => void
    children?: JSX.Element
    onPickRows?: (rows: Row[]) => void
    selectedRows?: Row[]
}

interface Row {
    index: number,
    '1.DATE&TIMES': string
    '2.ID': string

}

export default function SelectRows({ children, file, selectedRows, indexes, onPickIndexes, onLoading, onPickRows }: Props): JSX.Element {

    const [search, setSearch] = useState("")
    const [originalRows, setOriginalRows] = useState<Row[]>([])

    const handleLoadFile = () => {
        const reader = new FileReader();
        onLoading && onLoading(true)
        reader.onload = (e) => {
            const data = e.target.result;
            Papa.parse(data, {
                header: true,
                dynamicTyping: true,
                complete: (results) => {
                    onLoading && onLoading(false)
                    const records = results.data.map((row, index) => ({ index, ...row }))
                    setOriginalRows(records)
                }
            });
        }
        reader.readAsText(file);
    }


    useEffect(() => {
        if (file) {
            handleLoadFile()
        }
    }, [file])

    const handleClick = (row: Row) => {
        if (indexes.includes(row.index)) {
            // Tenho que remover o check
            onPickIndexes(indexes.filter(index => index !== row.index))
            onPickRows(selectedRows.filter(r => r.index !== row.index))


        } else {
            // Tenho que add o check
            onPickIndexes([...indexes, row.index])
            onPickRows([...selectedRows, row])


        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const rows = useMemo(() => {
        const text = search.trim().toLowerCase()
        if (!text) {
            return originalRows
        }
        return originalRows.filter((row) => {
            return row['2.ID']?.toString().toLowerCase().includes(text)
        })
    }, [search, originalRows])

    return (
        <div className="col-span-6">
            <div className="bg-gray-100 p-4 flex flex-col mt-1">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div>
                            {children}

                            <div className="w-full lg:w-auto">
                                <input
                                    type="text"
                                    id="search"
                                    //value = {search}
                                    onChange={handleSearch}
                                    placeholder='Procurar pelo ID'
                                    className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                                >

                                </input>

                            </div>

                            <table className="min-w-full">

                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            DateTime
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            ID- Name
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row) => (
                                        <tr key={row.index} className="bg-gray-100 border-b">
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        checked={indexes.includes(row.index)}
                                                        onChange={() => handleClick(row)}
                                                    />
                                                </label>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {row['1.DATE&TIMES']}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {row['2.ID']}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}