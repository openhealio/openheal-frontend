import React from "react";


interface Props {
    type: "button" | "submit" | "reset",
    className?: string,
    label: string,
    enabled?: boolean,
    spanClassName?: string
}

export default function ButtonStd({ type, enabled, spanClassName, className, label }: Props) {


    return (
        <div className={`${spanClassName} w-full lg:w-auto`}>
            <button
                type={type}
                className={`${className} ${!enabled ? "opacity-50" : ""} w-full mb-4 cursor-not-allowed':${!enabled} rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                disabled={!enabled}
            >
                {label}
            </button>
        </div>
    )
}