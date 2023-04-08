import React from "react";
interface Props {
    className?: string,
    children: React.ReactNode
}

export default function Card({ className, children }: Props) {
    return (
        <div className={`${className} m-10 mx-auto p-1 lg:px-80 text-center overflow-hidden shadow rounded  `}>
            {children}
        </div>

    )
}